import React, { useEffect } from 'react'
import startupStore from '../stores/startupStore'
import ProfileStartupItem from './ProfileStartupItem'
import CreateForm from './CreateForm'
import UpdateForm from './UpdateForm'
const Profile = () => {
    const store = startupStore();

    useEffect(() => {
      store.fetchProfileStartups();
    }, []);
  return (
    <div>
    <h2>Your Startups:</h2>
    {store.startups && store.startups.map(startup => (
<ProfileStartupItem key={startup._id} startup={startup}/>
))}


  <CreateForm/>
  <UpdateForm/>
  </div>
  )
}
export default Profile
