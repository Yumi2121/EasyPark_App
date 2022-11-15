import React from "react";
import {useState} from 'react';
import "./Signup.css";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }


  return (
    <form className='signup' onSubmit={handleSubmit}>
      <fieldset>
      <legend>Sign Up</legend>
        <div class="email">
          <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>

        <div class="password">
          <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>

        <div class="submit" disabled={isLoading} >
        <button type="submit" class="btn btn-primary">Sign Up</button>
        </div>
      </fieldset>
      {error && <div className="error">{error}</div>}
    </form>
  )
}
export default Signup;