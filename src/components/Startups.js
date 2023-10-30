import React, { useEffect, useState , useRef} from 'react';
import StartupItem from './StartupItem';
import AddStartup from './AddStartup';

const Startups = () => {

  const ref = useRef(null)
  const [startups, setStartups] = useState([]);
  const host = "http://localhost:5000"

  useEffect(() => {
    const getStartups = async () => {
      try {
          const response = await fetch(`${host}/api/v1/startups`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          });
          const json = await response.json();
          setStartups(json.startups);
      } catch (error) {
        console.log(error);
      }
    };

    getStartups();
  }, [])
  if(startups?.length){
    console.log(startups)
  }
  const updateStartup = (startup)=> {
    ref.current.click();
     }
  return (
    <>
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Edit Startup</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button ref = {ref} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      <div className="container my-20">
        <h1>All Startups</h1>
        {startups.length > 0 && (
          startups.map((startup) => (
            <StartupItem key={startup._id} updateStartup={updateStartup} startup={startup} />
          ))
        )}
      </div>
    </>
  );
};

export default Startups;