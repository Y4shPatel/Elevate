import React , {useContext} from 'react'
import StartupContext from '../context/StartupsContext'

const ProfileStartypItem = (props) => {
  const context = useContext(StartupContext);
  const { deleteStartup } = context;
   const {startup , updateStartup} = props;
  return (
    <div>
      <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{startup.title}</h5>
    <p className="card-text"> {startup.description}</p>
    <i className="fa-solid fa-trash mx-2" onClick={ () => {deleteStartup(startup._id)}}></i>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={ () => {updateStartup(startup)}}></i>
  </div>
</div>
    </div>
  )
}

export default ProfileStartypItem
