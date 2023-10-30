import React , {useContext} from 'react'
import StartupContext from '../context/StartupsContext'

const ProfileStartypItem = (props) => {
  const context = useContext(StartupContext);
  const { deleteStartup } = context;
   const {startup} = props;
  return (
    <div>
      <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{startup.title}</h5>
    <p className="card-text"> {startup.description}</p>
  </div>
</div>
    </div>
  )
}

export default ProfileStartypItem
