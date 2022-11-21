import React from "react";
import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/AuthContext";

const Form = ({ option }) => {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
    });

    const { user, loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials(prev=> ({ ...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(credentials) //test to see if credentials were being stored

        const SignUp = async () => {
            dispatch({type:"REGISTER_START"})
            try{
                const res = await axios.post("/auth/register", credentials);
                dispatch({ type: "REGISTER_SUCCESS", data: res.data});
                // JSON.parse(localStorage.setItem(user));
                navigate("/")
            } catch(err) {
                dispatch({type:"REGISTER_FAILURE", data:err.response.data})
            }
        }

        const SignIn = async () => {
            dispatch({type:"LOGIN_START"})
            try{
                const res = await axios.post("/auth/login", credentials);
                dispatch({ type: "LOGIN_SUCCESS", data: res.data});
                navigate("/")
            }catch(err) {
                dispatch({type:"LOGIN_FAILURE", data:err.response.data})
            }
        }
       
        if(option === 1) {
            SignIn()
        } else {
            SignUp()
        }

    }


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