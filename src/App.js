import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import About from './components/About'
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup'
const App = () => {



  return (
    <>
   <Router>
        <Navbar/>
        <Alert message="welcome to Elevate"/>
        <div className="container">
        <Routes>
          <Route exact path="/"element={<Home/>}>
          </Route>
          <Route exact path="/about"element={<About/>}>
          </Route>
          <Route exact path="/profile"element={<Profile/>}>
          </Route>
          <Route exact path="/profile"element={<Profile/>}>
          </Route>
          <Route exact path="/login" element={<Login/>}>
          </Route>
          <Route exact path="/signup" element={<Signup/>}>
          </Route>
        </Routes> 
        </div>
      </Router>
    </>
  );
}

export default App;