import React, { useContext  , useState} from 'react'
import StartupContext from '../context/StartupsContext'

const AddStartup = () => {
  const context = useContext(StartupContext);
  const { addStartup } = context;
  const [startup , setStartup] = useState({title : "" , description:"" , field : "" , progress : "" , StartedBy : "" , email:"" , phoneNo : "" , address : "" })
  const onClick = (e) => {
    e.preventDefault();
    addStartup(startup.title , startup.description , startup.field , startup.progress , startup.StartedBy , startup.email , startup.phoneNo , startup.address);
  }
  const onChange = (e) => {
    setStartup({...startup , [e.target.name] : e.target.value})
  }
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">title</label>
        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Decription</label>
        <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="field" className="form-label">field</label>
        <input type="text" className="form-control" id="field" name="field" onChange={onChange} />
      </div><div className="mb-3">
        <label htmlFor="progress" className="form-label">Progress</label>
        <input type="text" className="form-control" id="progress" name="progress" onChange={onChange} />
      </div><div className="mb-3">
        <label htmlFor="StartedBy" className="form-label">started By</label>
        <input type="text" className="form-control" id="StartedBy" name="StartedBy" onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">email</label>
        <input type="email" className="form-control" id="email" name="email" onChange={onChange} />
      </div><div className="mb-3">
        <label htmlFor="phoneNo" className="form-label">phone No</label>
        <input type="text" className="form-control" id="phoneNo" name="phoneNo" onChange={onChange} />
      </div><div className="mb-3">
        <label htmlFor="address" className="form-label">address</label>
        <input type="text" className="form-control" id="address" name="address" onChange={onChange} />
      </div>
      <button type="submit" className="btn btn-primary" onClick={onClick}>Add Startup</button>
    </form>
  )
}

export default AddStartup
