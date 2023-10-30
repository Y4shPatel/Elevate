
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import About from './Components/About'
import StartupState from './context/StartupsState';
import Alert from './Components/Alert';
import Profile from './Components/Profile';



const App = () => {

  
   return (
    <>
    <StartupState>
      <Router>
        <Navbar />
        <Alert message="welcome to Elevate"/>
        <div className="container">
        <Routes>
          <Route exact path="/"element={<Home/>}>
          </Route>
          <Route exact path="/about"element={<About/>}>
          </Route>
          <Route exact path="/profile"element={<Profile/>}>
          </Route>
        </Routes> 
        </div>
      </Router>
      </StartupState>
    </>
  )};


export default App;