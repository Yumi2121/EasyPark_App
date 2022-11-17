import React from "react";
import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Form = ({ option }) => {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();


    const handleChange = (e) => {
        console.log(e.target.id)
        setCredentials(prev=> ({ ...prev, [e.target.id]: e.target.value}));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(credentials) //test to see if credentials were being changed

        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", data: res.data});
            navigate("/")
        }catch(err) {
            dispatch({type:"LOGIN_FAILURE", data:err.response.data})
        }
    }

    return (
        <form className='account-form' onSubmit={handleSubmit}>
            <div className={'account-form-fields ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
                <input id='email'  name='email' type='email' placeholder='E-mail' value={credentials.email} onChange={handleChange}  required />
                <input id='password' name='password' type='password' placeholder='Password' value={credentials.password} onChange={handleChange} required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
                <input id='repeat-password' name='repeat-password' type='password' placeholder='Repeat password' required={option === 2 ? true : false} disabled={option === 1 || option === 3 ? true : false} />
            </div>
            <button className='btn-submit-form' type='submit' >
                { option === 1 ? 'Sign in' : (option === 2 ? 'Sign up' : 'Reset password') }
            </button>
        </form>
    )
    }

export default Form;