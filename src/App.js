import React, { useState, useEffect } from 'react';
import axios from 'axios';
import startupStore from './stores/startupStore';
import Startups from './components/Startups'
import UpdateForm from './components/UpdateForm';
import CreateForm from './components/CreateForm';
const App = () => {


  const store = startupStore();

  // Use effect
  useEffect(() => {
    store.fetchStartups();
  }, []);


  return (
    <>
      <Startups />
      <UpdateForm />
      <CreateForm />
    </>
  );
}

export default App;