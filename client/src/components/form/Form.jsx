import React from "react";
import easyparkAPI from '../../config/api'
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/AuthContext";
import { useGlobalState } from "../../utils/StateContext";
import Login from "../../pages/login/Login";
import { loginUser, registerUser, getAdminUser, setAdminUser, getLoggedInUser, setLoggedInUser } from "../../services/authServices";
import Admin from "../admin/Admin";

export default function Form({ option }) {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const { dispatch } = useGlobalState();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);

    // handle the form inputs change
    function handleChange(e) {
        setCredentials(prev=> ({ ...prev, [e.target.name]: e.target.value}));
    };

  // the logic after click the submit button
    function handleSubmit(e) {
        e.preventDefault();
        if (option === 1) {
            loginUser(credentials)
            .then((data) => {
                let email = data.email;
                let token = data.token;

                sessionStorage.setItem("token", token)
                sessionStorage.setItem("user", email)

                dispatch({ type: "setLoggedInUser", data: email});
                dispatch({ type: "setToken", data: token});
                navigate("/")

                
            })
            .catch((error) => {
                console.log(error)
                dispatch({ type: "setLoggedInUser", data: null});

                if (error.data && error.data.status === 401) {
                    setErrorMessage('Authentication failed. Please check your username and password.')
                } else {
                    setErrorMessage('we are sorry that something wrong with server, please try aagain.')
                }

            });
        } else if (option === 2){ 
            registerUser(credentials)
            .then((data) => {
                let email = data.email;
                let token = data.token;

                sessionStorage.setItem("token", token)
                sessionStorage.setItem("user", email)

                dispatch({ type: "setLoggedInUser", data: email});
                dispatch({ type: "setToken", data: token});
                navigate("/")
            })
            .catch((error) => {
                console.log(error)
            });
        };
        // const SignUp = async () => {
        //     dispatch({type:"REGISTER_START"})
        //     try{
        //         const res = await easyparkAPI.post("/users/register", credentials);
        //         localStorage.setItem('userLogin', JSON.stringify(res))
        //         console.log(res)
        //         dispatch({ type: "REGISTER_SUCCESS", data: res.data}); 
        //         navigate("/")
        //     } catch(err) {
        //         console.log("Error registering user", err);
        //     }
        // }

        // const SignIn = async () => {
        //     dispatch({type:"LOGIN_START"})
        //     try{
        //         const res = await easyparkAPI.post("/users/login", credentials);
            
        //         localStorage.setItem('userLogin', JSON.stringify(res))
        //         dispatch({ type: "LOGIN_SUCCESS", data: res.data});
        //         navigate("/")
        //     }catch(err) {
        //         dispatch({type:"LOGIN_FAILURE", data:err.response.data})
        //     }
        }

      

  


    return (
        <>
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

        <p style={{ color: "blue", size: "10px"}}>
            {errorMessage}
        </p>

        </>


    )
    };

