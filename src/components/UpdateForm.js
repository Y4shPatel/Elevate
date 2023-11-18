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
        <div className="mb-3"> <h1>title</h1> <input type="text" onChange = {store.handleUpdateFieldChange}value = {store.updateForm.title} name="title" /> </div>
          <div className="mb-3"> <input type="text" onChange = {store.handleUpdateFieldChange} value={store.updateForm.description}name="description" /> </div>
          <div className="mb-3"> <input type="text" onChange = {store.handleUpdateFieldChange} value = {store.updateForm.field}name="field" /> </div>
          <div className="mb-3"> <input type="text" onChange = {store.handleUpdateFieldChange} value={store.updateForm.progress}name="progress" /> </div>
          <div className="mb-3"> <input type="text" onChange = {store.handleUpdateFieldChange} value = {store.updateForm.StartedBy} name="StartedBy" /> </div>
          <div className="mb-3"> <input type="email" onChange = {store.handleUpdateFieldChange}  value={store.updateForm.email}name="email" /> </div>
          <div className="mb-3"> <input type="text" onChange = {store.handleUpdateFieldChange} value={store.updateForm.phoneNo} name="phoneNo" /> </div>
          <div className="mb-3"> <input type="text" onChange = {store.handleUpdateFieldChange} value={store.updateForm.address}name="address" /> </div>
          <button type="submit" className="btn btn-primary">Update</button>

        </form>

      </div>
      )}
   </>
  )
}

export default UpdateForm
