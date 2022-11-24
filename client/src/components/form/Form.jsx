import React from "react";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/AuthContext";
import { useGlobalState } from "../../utils/StateContext";

const Form = ({ option }) => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",

    });

    const { user, loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    // handle the form inputs change
    const handleChange = (e) => {
        setCredentials(prev=> ({ ...prev, [e.target.name]: e.target.value}));
    };

  // the logic after click the submit button
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        // console.log(credentials) //test to see if credentials were being stored

        const SignUp = async () => {
            dispatch({type:"REGISTER_START"})
            try{
                const res = await axios.post("/api/users/register", credentials);
                localStorage.setItem('userLogin', JSON.stringify(res))
                console.log(res)
                dispatch({ type: "REGISTER_SUCCESS", data: res.data}); 
                navigate("/")
            } catch(err) {
                console.log("Error registering user", err);
            }
        }

        const SignIn = async () => {
            dispatch({type:"LOGIN_START"})
            try{
                const res = await axios.post("/api/users/login", credentials);
            
                localStorage.setItem('userLogin', JSON.stringify(res))
                dispatch({ type: "LOGIN_SUCCESS", data: res.data});
                navigate("/")
            }catch(err) {
                dispatch({type:"LOGIN_FAILURE", data:err.response.data})
            }
        }

        if (option === 1) {
            SignIn()
        } else { 
            SignUp()
        };

    };


    return (
        <form className='account-form' onSubmit={handleSubmit}>
            <div className={'account-form-fields ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
                <input onChange={handleChange} name='email' type='email' placeholder='E-mail' required />
                <input onChange={handleChange} name='password' type='password' placeholder='Password' required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
                <input onChange={handleChange} name='repeat-password' type='password' placeholder='Repeat password' required={option === 2 ? true : false} disabled={option === 1 || option === 3 ? true : false} />
            </div>
            <button className='btn-submit-form' type='submit'>
                { option === 1 ? 'Sign in' : (option === 2 ? 'Sign up' : 'Reset password') }
            </button>
        </form>
    )
    }

export default Form;