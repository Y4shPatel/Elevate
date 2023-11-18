import { create } from 'zustand';
import axios from 'axios';

const startupStore = create((set) => ({
  startups: [],

  createForm: {
    title: "",
    description: "",
    field: "",
    progress: "",
    StartedBy: "",
    email: "",
    phoneNo: "",
    address: "",
  },


  updateForm: {
    _id : null,
    title: "",
    description: "",
    field: "",
    progress: "",
    StartedBy: "",
    email: "",
    phoneNo: "",
    address: "",
  },

  fetchStartups : async () => {
    try {
      // Fetch the startups
      const res = await axios.get("http://localhost:5000/api/v1/startups",);
      // Set to state
      set({ startups: res.data.startups });
    } catch (error) {
      console.error('Error fetching startups:', error);
    }
  }, 

  fetchProfileStartups: async () => {
    try {
      // Fetch the startups
      const res = await axios.get("http://localhost:5000/api/v1/startups/profile", {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTNmZDkzNGM4MzYwMWQwMDFkOTJlYjYiLCJuYW1lIjoiWWFzaCBQYXRlbCIsImlhdCI6MTY5OTYyNDk3NiwiZXhwIjoxNzAyMjE2OTc2fQ.qEq6PVmJp8X9Ix64oCILbZJj7b6UT9z_HEneq2My47w'
        }
      });
      // Set to state
      set({ startups: res.data.startups });
    } catch (error) {
      console.error('Error fetching startups:', error);
    }
  },

  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => ({
      createForm: {
        ...state.createForm,
        [name]: value,
      }
    }));
  },

  createStartup: async (e) => {
    e.preventDefault();

    const { createForm } = startupStore.getState();

    // Create the startup
    try {
      const res = await axios.post("http://localhost:5000/api/v1/startups/profile", createForm, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTNmZDkzNGM4MzYwMWQwMDFkOTJlYjYiLCJuYW1lIjoiWWFzaCBQYXRlbCIsImlhdCI6MTY5OTYyNDk3NiwiZXhwIjoxNzAyMjE2OTc2fQ.qEq6PVmJp8X9Ix64oCILbZJj7b6UT9z_HEneq2My47w'
        }
      });

      set((state) => ({
        startups: [...state.startups, res.data.startup],
        createForm: {
          title: "",
          description: "",
          field: "",
          progress: "",
          StartedBy: "",
          email: "",
          phoneNo: "",
          address: ""
        }
      }));
    } catch (error) {
      console.error('Error creating startup:', error);
    }
  },


  deleteStartup : async (_id) => {
    //delete the startup
    const res = await axios.delete(`http://localhost:5000/api/v1/startups/profile/${_id}`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTNmZDkzNGM4MzYwMWQwMDFkOTJlYjYiLCJuYW1lIjoiWWFzaCBQYXRlbCIsImlhdCI6MTY5OTYyNDk3NiwiZXhwIjoxNzAyMjE2OTc2fQ.qEq6PVmJp8X9Ix64oCILbZJj7b6UT9z_HEneq2My47w'
      }
    })

    const {startups} = startupStore.getState();


    //update the state
    const newStartups = startups.filter((startup) => {
      return startup._id !== _id;
    });

    set({ startups: newStartups})
  
  },

 handleUpdateFieldChange : (e) => {
    const { name , value} = e.target;

    set(state=> {
      return { 
        updateForm : {
          ...state.updateForm,
          [name] : value,
        }
      }
    })
 
    
  },

 toggleUpdate : (startup)=>{
    // console.log(startup)
    //set state on update form 
    set ({
      updateForm:{
        _id : startup._id ,title: startup.title,
      description : startup.description , progress : startup.progress , field : startup.field , StartedBy : startup.StartedBy , phoneNo : startup.phoneNo , email : startup.email , address:startup.address
      }
    })

  },

  UpdateStartup: async (e) => {
    e.preventDefault();
  
    const { updateForm: { title, description, field, progress, StartedBy, phoneNo, email, address, _id }, startups } = startupStore.getState();
  
    try {
      // Send the update request
      const res = await axios.patch(
        `http://localhost:5000/api/v1/startups/profile/${_id}`,
        { title, description, field, progress, StartedBy, email, phoneNo, address },
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTNmZDkzNGM4MzYwMWQwMDFkOTJlYjYiLCJuYW1lIjoiWWFzaCBQYXRlbCIsImlhdCI6MTY5OTYyNDk3NiwiZXhwIjoxNzAyMjE2OTc2fQ.qEq6PVmJp8X9Ix64oCILbZJj7b6UT9z_HEneq2My47w',
          },
        }
      );
  
      // Check if the response has the expected data
      if (res.data) {
        // Update state
        set((state) => ({
          startups: state.startups.map(startup =>
            startup._id === _id ? res.data : startup
          ),
          updateForm: {
            _id: null,
            title: "",
            description: "",
            field: "",
            progress: "",
            StartedBy: "",
            email: "",
            phoneNo: "",
            address: ""
          }
        }));
      } else {
        console.error('Update response is missing expected data:', res.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.error('Bad Request. Check if the data sent is valid:', error.response.data);
      } else {
        console.error('Error updating startup:', error.message);
      }
    }
  }
  


  

}));

export default startupStore;
