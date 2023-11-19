import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import authStore from "../stores/authStore"
const Login = () => {

 const store = authStore()

  const navigate = useNavigate()

 const handleLogin = async  (e)=>{
  e.preventDefault();
 await store.login()

 //navigate
navigate("/profile")
 }
  return (
    <>
      <form onSubmit={handleLogin}>
  <div className="mb-3">
    <label htmlfor="email" className="form-label">Email address</label>
    <input onChange={store.updateLoginForm} value={store.loginForm.email}type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"/>
  
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={store.updateLoginForm} value = {store.loginForm.password}type="password"  className="form-control" id="password" name = "password" />
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </>
  )
}

export default Login
