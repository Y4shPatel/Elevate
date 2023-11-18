import React from 'react'
import axios from 'axios';
import authStore from "../stores/authStore"
const Login = () => {
 const store = authStore()
  return (
    <>
      <form onSubmit={store.login}>
  <div classname="mb-3">
    <label htmlfor="email" classname="form-label">Email address</label>
    <input onChange={store.updateLoginForm} value={store.loginForm.email}type="email" classname="form-control" id="email" name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" classname="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div classname="mb-3">
    <label htmlfor="exampleInputPassword1" classname="form-label">Password</label>
    <input onChange={store.updateLoginForm} value = {store.loginForm.password}type="password"  classname="form-control" id="password" name = "password" />
  </div>
  <button type="submit" classname="btn btn-primary" >Submit</button>
</form>
    </>
  )
}

export default Login
