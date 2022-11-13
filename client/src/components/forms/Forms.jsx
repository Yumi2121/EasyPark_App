import React from "react";
import {useState} from 'react';
import "./Forms.css";

const Forms = () => {
  return (
  <div class="container">
    <form>
      <fieldset>
      <legend>Sign Up</legend>
        <div class="email">
          <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>

        <div class="password">
          <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>

        <div class="submit">
        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </fieldset>
    </form>
  </div>
  )
}
export default Forms;