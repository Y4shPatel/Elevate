import React from 'react'
import authStore from '../stores/authStore'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const store = authStore();
    const navigate = useNavigate();
    const handleSignup = async (e) =>{
      e.preventDefault();
       await store.signup();
      navigate("/login")
    }
  return (<>
    <form onSubmit={handleSignup}>
    <div className="mb-3">
    <label htmlFor="email" className="form-label">Name</label>
    <input onChange={store.updateSignupForm} value={store.signupForm.name}type="name" className="form-control" id="name" name="name" aria-describedby="emailHelp"/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input onChange={store.updateSignupForm} value={store.signupForm.email}type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={store.updateSignupForm} value = {store.signupForm.password}type="password"  className="form-control" id="password" name = "password" />
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
</>
  )
}

export default Signup
