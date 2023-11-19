import { create } from 'zustand';
import axios from 'axios';

const authStore = create((set) => ({
    loggedIn : null,


    loginForm: {
        email: "",
        password: "",
    },

    signupForm: {
        email: "",
        password: "",
        name : ""
    },


    updateLoginForm: (e) => {
        const { name, value } = e.target

        set(state => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value,
                }
            }
        })

    },

    updateSignupForm: (e) => {
        const { name, value } = e.target

        set((state) => {
            return {
                signupForm: {
                    ...state.signupForm,
                    [name]: value,
                }
            }
        })

    },


    login: async (e) => {
        try {
          
            const { loginForm } = authStore.getState();

            const res = await axios.post('http://localhost:5000/api/v1/auth/login', loginForm , {withCredentials:true});
            


            set({loggedIn : true, loginForm :{
                email : "", password : ""
            }});
        
        } catch (error) {
            console.error('Login error:', error);
    
            // Handle errors or show a user-friendly message
        }

         
    },
    checkAuth : async () => {
      try{  await axios.get('http://localhost:5000/api/v1/auth/checkauth' , {withCredentials : true})

        set({loggedIn : true });
    }
    catch (err){
        set({loggedIn : false})
    }
    },

    signup : async ()=>{

        try {
        const { signupForm } = authStore.getState();
        const res = await axios.post('http://localhost:5000/api/v1/auth/signup' , signupForm , {withCredentials : true})

set({
    signupForm:{
        name: "",
        email : "",
        password : ""
    }
})
    }
    catch(error){
        console.error('Signup error: ' ,error)
    }
    },

    logout : async ()=> {
        axios.get('http://localhost:5000/api/v1/auth/logout', {withCredentials : true})
        set({loggedIn : false})
    }

}))

export default authStore;
