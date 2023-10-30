import { useState } from "react";
import StartupContext from "./StartupsContext";

const StartupState = (Props) =>{
  const host = "http://localhost:5000"
  const initialStartups = [];
  

    const [ startups , setStartups] = useState(initialStartups)



    //Add a startup
    const addStartup = async (title , description , field , progress, StartedBy , email , phoneNo , address )=>{
    {
        const response = await fetch(`${host}/api/v1/startups/profile`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "Authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTI0M2Q2NGQ5Y2QzNDEyMDhlOWRkZmQiLCJuYW1lIjoiWWFzaCBQYXRlbCIsImlhdCI6MTY5Njg3Mzg0MCwiZXhwIjoxNjk5NDY1ODQwfQ.tVMs49fw7vDnZPsLaZDSJMB1aiFcK3ywfft2RTz7KM0'
          },
          body :JSON.stringify({title , description , field , progress  , StartedBy , email , phoneNo , address})
        });
    
      }
      const startup = 
        {
          "_id": "653fb9c9a5b0f6271ca45342",
          "title": title,
          "description": description,
          "field": field,
          "progress": progress,
          "StartedBy": StartedBy,
          "email": email,
          "phoneNo": phoneNo,
          "address": address,
          "createdBy": "65243d64d9cd341208e9ddfd",
          "__v": 0
      }
      setStartups(startups.concat(startup))
    }






    //delete a startup
    const deleteStartup = async (id)=>{
  
        const response = await fetch(`${host}/api/v1/startups/profile/${id}`, {
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json",
            "Authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTI0M2Q2NGQ5Y2QzNDEyMDhlOWRkZmQiLCJuYW1lIjoiWWFzaCBQYXRlbCIsImlhdCI6MTY5Njg3Mzg0MCwiZXhwIjoxNjk5NDY1ODQwfQ.tVMs49fw7vDnZPsLaZDSJMB1aiFcK3ywfft2RTz7KM0'
          },
        });
    const json = await response.json()

      const newStartup = startups.filter((startup)=>{
        return startup._id !==id  
      })
      setStartups(newStartup)
    }






    //edit a startup
    const editStartup = async (id ,title , description , field , progress , StartedBy , email , phoneNo , address )=>{
      
        const response = await fetch(`${host}/api/v1/startups/profile/${id}`, {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
            "Authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTI0M2Q2NGQ5Y2QzNDEyMDhlOWRkZmQiLCJuYW1lIjoiWWFzaCBQYXRlbCIsImlhdCI6MTY5Njg3Mzg0MCwiZXhwIjoxNjk5NDY1ODQwfQ.tVMs49fw7vDnZPsLaZDSJMB1aiFcK3ywfft2RTz7KM0'
          },
          body :JSON.stringify({title , description , field , progress  , StartedBy , email , phoneNo , address})
        });
    const json = await response.json()

      for (let index = 0; index < startups.length; index++) {
        const element = startups[index];
        if(element._id === id){
          element.title = title;
          element.description = description;
          element.field = field;
          element.progress = progress;
          element.StartedBy = StartedBy;
          element.email = email;
          element.phoneNo = phoneNo;
          element.address = address;
        }
      }
    }





    return(

        <StartupContext.Provider value={{startups, addStartup , editStartup ,deleteStartup , }}>
            {Props.children}
        </StartupContext.Provider>
    )
}


export default StartupState;