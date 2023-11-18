import React from 'react'


const StartupItem = ({startup}) => {
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

export default StartupItem



