import React, { useState } from 'react';

const StartupItem = ({ startup }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen ? (
        <div className="card" style={{ marginBottom: '20px' }}>
          <div className="card-body" >
            <h3>TITLE</h3>
            <p className="card-title" style={{ fontSize: '20px' }}>{startup.title}</p>
            <h3>DESCRIPTION</h3>
            <p className="card-text" style={{ fontSize: '20px' }}>{startup.description || 'NA'}</p>
            <h3>FIELD</h3>
            <p className="card-text" style={{ fontSize: '20px' }}>{startup.field || 'NA'}</p>
            <h3>PROGRESS</h3>
            <p className="card-text" style={{ fontSize: '20px' }} >{startup.progress || 'NA'}</p>
            <h3>STARTED BY</h3>
            <p className="card-text" style={{ fontSize: '20px' }} >{startup.startedBy || 'NA'}</p>
            <h3>PHONE NO</h3>
            <p className="card-text" style={{ fontSize: '20px' }}>{startup.phoneNo || 'NA'}</p>
            <h3>EMAIL</h3>
            <p className="card-text" style={{ fontSize: '20px' }} >{startup.email || 'NA'}</p>
            <h3>ADDRESS</h3>
            <p className="card-text" style={{ fontSize: '20px' }}>{startup.address || 'NA'}</p>
            <button type="button" className="btn btn-info" onClick={toggleDetails}>
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="card" style={{ marginBottom: '20px' }}>
          <div className="card-body">
            <h2 className="card-title">{startup.title}</h2>
            <p className="card-text">{startup.description}</p>
            <button type="button" className="btn btn-info" onClick={toggleDetails}>
              Open
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default StartupItem;
