import React, { useEffect, useState } from 'react';
import StartupItem from './profileStartupItem';
import AddStartup from './AddStartup';

const Startups = () => {
  const [startups, setStartups] = useState([]);
  const host = "http://localhost:5000"

  useEffect(() => {
    const getStartups = async () => {
      try {
          const response = await fetch(`${host}/api/v1/startups/profile`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTNmZDkzNGM4MzYwMWQwMDFkOTJlYjYiLCJuYW1lIjoiWWFzaCBQYXRlbCIsImlhdCI6MTY5ODY4MzE4OSwiZXhwIjoxNzAxMjc1MTg5fQ.7j3bBU3YXbdIHnXD054kV03nTrRK51uVsYK7vYXGq9k'
            }
          });
          const json = await response.json();
          setStartups(json.startups);
      } catch (error) {
        console.log(error);
      }
    };

    getStartups();
  }, [])
  if(startups?.length){
    console.log(startups)
  }
  return (
    <>    
      <div className="container my-20">
        <h1>Your Startups</h1>
        {startups.length > 0 && (
          startups.map((startup) => (
            <StartupItem key={startup._id} startup={startup} />
          ))
        )}
            <h1>Add a startup</h1>
      <AddStartup />
      </div>
    </>
  );
};

export default Startups;