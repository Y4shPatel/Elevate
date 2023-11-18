import React from 'react'
import startupStore from '../stores/startupStore'

const ProfileStartupItem = ({startup}) => {
  const store = startupStore((store)=>{
    return{ deleteStartup :store.deleteStartup , toggleUpdate : store.toggleUpdate};
  });
  
return (
  <div>
      <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{startup.title}</h5>
    <p className="card-text"> {startup.description}</p>
    <i className="fa-solid fa-trash mx-2" onClick={ () => {store.deleteStartup(startup._id)}}></i>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={ () => {store.toggleUpdate(startup)}}></i>
  </div>
</div>  
    </div>
)
}

export default ProfileStartupItem
