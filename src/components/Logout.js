import React, { useEffect } from 'react'
import authStore from '../stores/authStore'
import { useNavigate } from 'react-router-dom';

  
const Logout = () => {
    const store = authStore()
    const navigate = useNavigate();

    useEffect(()=>{
        store.logout();
    } , [])
    navigate("/login")
  return (
    <div>
    
    </div>
  )
}

export default Logout
