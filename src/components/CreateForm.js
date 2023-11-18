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
            <div className="mb-3">
              <label htmlFor="title" className="form-label">title</label>
              <input type="text" className="form-control" id="title" name="title" value={store.createForm.title} aria-describedby="emailHelp" onChange={store.updateCreateFormField} />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Decription</label>
              <input type="text" className="form-control" id="description" name="description" value={store.createForm.description} onChange={store.updateCreateFormField} />
            </div>
            <div className="mb-3">
              <label htmlFor="field" className="form-label">field</label>
              <input type="text" className="form-control" id="field" name="field" value={store.createForm.field} onChange={store.updateCreateFormField} />
            </div><div className="mb-3">
              <label htmlFor="progress" className="form-label">Progress</label>
              <input type="text" className="form-control" id="progress" name="progress" value={store.createForm.progress} onChange={store.updateCreateFormField} />
            </div><div className="mb-3">
              <label htmlFor="StartedBy" className="form-label">started By</label>
              <input type="text" className="form-control" id="StartedBy" name="StartedBy" value={store.createForm.StartedBy} onChange={store.updateCreateFormField} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">email</label>
              <input type="email" className="form-control" id="email" name="email" value={store.createForm.email} onChange={store.updateCreateFormField} />
            </div><div className="mb-3">
              <label htmlFor="phoneNo" className="form-label">phone No</label>
              <input type="text" className="form-control" id="phoneNo" name="phoneNo" value={store.createForm.phoneNo} onChange={store.updateCreateFormField} />
            </div><div className="mb-3">
              <label htmlFor="address" className="form-label">address</label>
              <input type="text" className="form-control" id="address" name="address" value={store.createForm.address} onChange={store.updateCreateFormField} />
            </div>
            <button type="submit" className="btn btn-primary">Add Startup</button>
          </form>
        </div>)}
    </>
  )
}

export default CreateForm
