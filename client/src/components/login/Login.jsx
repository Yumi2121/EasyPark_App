// import React from "react";
// import {useState} from 'react';
// import "./Login.css";

// const Login = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     console.log(email, password)
//   }
//   return (
//     <form className='login' onSubmit={handleSubmit}>
//       <fieldset>
//       <legend>Log In</legend>
//         <div class="email">
//           <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
//           <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//         </div>

//         <div class="password">
//           <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
//           <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
//         </div>

//         <div class="submit">
//         <button type="submit" class="btn btn-primary">Log In</button>
//         </div>
//       </fieldset>
//     </form>
//   )
// }
// export default Login;