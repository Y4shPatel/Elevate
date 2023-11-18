import React from 'react'
import startupStore from '../stores/startupStore'
import StartupItem from './StartupItem';
const Startups = () => {
    const store = startupStore();
  return (
    <div>
    <h2>Startups:</h2>
    {store.startups && store.startups.map(startup => (
<StartupItem key={startup._id} startup={startup}/>
))}

  </div>
  )
}

export default Startups
