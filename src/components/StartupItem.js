import React from 'react'
import startupStore from '../stores/startupStore'


const StartupItem = ({startup}) => {
    const store = startupStore((store)=>{
      return{ deleteStartup :store.deleteStartup , toggleUpdate : store.toggleUpdate};
    });
    
  return (
    <div key={startup._id}>
    <h3>{startup.title}</h3>
    <button onClick={() => { store.deleteStartup(startup._id) }}>Delete</button>
    <button onClick={() => { store.toggleUpdate(startup) }}>Update</button>
    </div>
  )
}

export default StartupItem
