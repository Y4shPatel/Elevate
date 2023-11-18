import React from 'react'
import startupStore from '../stores/startupStore'

const CreateForm = () => {
    const store = startupStore()
  return (
<>
{!store.updateForm._id && (
      <div>
        <h2>Create a Startup</h2>
        <form onSubmit={store.createStartup} >
          <div className="mb-3"> <h1>title</h1> <input type="text" onChange={store.updateCreateFormField} value={store.createForm.title} name="title" /> </div>
          <div className="mb-3"> <input type="text" onChange={store.updateCreateFormField} value={store.createForm.description} name="description" /> </div>
          <div className="mb-3"> <input type="text" onChange={store.updateCreateFormField} value={store.createForm.field} name="field" /> </div>
          <div className="mb-3"> <input type="text" onChange={store.updateCreateFormField} value={store.createForm.progress} name="progress" /> </div>
          <div className="mb-3"> <input type="text" onChange={store.updateCreateFormField} value={store.createForm.StartedBy} name="StartedBy" /> </div>
          <div className="mb-3"> <input type="email" onChange={store.updateCreateFormField} value={store.createForm.email} name="email" /> </div>
          <div className="mb-3"> <input type="text" onChange={store.updateCreateFormField} value={store.createForm.phoneNo} name="phoneNo" /> </div>
          <div className="mb-3"> <input type="text" onChange={store.updateCreateFormField} value={store.createForm.address} name="address" /> </div>
          <button type="submit" className="btn btn-primary">Add Startup</button>
        </form>
      </div>)}
</>
  )
}

export default CreateForm
