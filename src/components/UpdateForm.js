import React from 'react'
import startupStore from '../stores/startupStore'

const UpdateForm = () => {
  const store = startupStore()
  return (
    <>
      {store.updateForm._id && (
        <div>
          <h2>update startup</h2>
          <form onSubmit={store.UpdateStartup}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">title</label>
              <input type="text" className="form-control" id="title" name="title" value={store.updateForm.title} aria-describedby="emailHelp" onChange={store.handleUpdateFieldChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Decription</label>
              <input type="text" className="form-control" id="description" name="description" value={store.updateForm.description} onChange={store.handleUpdateFieldChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="field" className="form-label">field</label>
              <input type="text" className="form-control" id="field" name="field" value={store.updateForm.field} onChange={store.handleUpdateFieldChange} />
            </div><div className="mb-3">
              <label htmlFor="progress" className="form-label">Progress</label>
              <input type="text" className="form-control" id="progress" name="progress" value={store.updateForm.progress} onChange={store.handleUpdateFieldChange} />
            </div><div className="mb-3">
              <label htmlFor="StartedBy" className="form-label">started By</label>
              <input type="text" className="form-control" id="StartedBy" name="StartedBy" value={store.updateForm.StartedBy} onChange={store.handleUpdateFieldChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">email</label>
              <input type="email" className="form-control" id="email" name="email" value={store.updateForm.email} onChange={store.handleUpdateFieldChange} />
            </div><div className="mb-3">
              <label htmlFor="phoneNo" className="form-label">phone No</label>
              <input type="text" className="form-control" id="phoneNo" name="phoneNo" value={store.updateForm.phoneNo} onChange={store.handleUpdateFieldChange} />
            </div><div className="mb-3">
              <label htmlFor="address" className="form-label">address</label>
              <input type="text" className="form-control" id="address" name="address" value={store.updateForm.address} onChange={store.handleUpdateFieldChange} />
            </div>
            <button type="submit" className="btn btn-primary">Update</button>

          </form>

        </div>
      )}
    </>
  )
}

export default UpdateForm
