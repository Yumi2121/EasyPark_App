import React from "react";
import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Login = () => {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
    });

    const { laoding, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()


    const handleChange = (e) => {
        setCredentials(prev=> ({ ...prev, [e.target.id]: e.target.value}));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", data: res.data});
            navigate("/")
        }catch(err) {
            dispatch({type:"LOGIN_FAILURE", data:err.response.data})
        }
    }


    return (
        <form className='login'>
            <fieldset>
                <legend>Log In</legend>
                <div class="email">
                    <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
                    <input type="email" onChange={handleChange} value={credentials.email} class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
        
                <div class="password">
                    <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                    <input type="password" onChange={handleChange} value={credentials.password} class="form-control" id="password" placeholder="Password"/>
                </div>
        
                <div class="submit">
                <button disabled={laoding} onClick={handleClick} type="submit" class="btn btn-primary">Log In</button>
                </div>

                {error && <span>{error.message}</span>}
            </fieldset>
      </form>
    )};

export default Login;




