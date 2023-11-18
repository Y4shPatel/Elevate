import { create } from 'zustand';
import axios from 'axios';

const authStore = create((set) => ({


    loginForm: {
        email: "",
        password: "",
    },


    updateLoginForm: (e) => {
        const { name, value } = e.target
        const { loginForm } = authStore.getState()
        set(state => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value,
                }
            }
        })

    },


    login : async (e) => {
        e.preventDefault();
        const {loginForm} = authStore.getState();
        const res = await axios.post('http://localhost:5000/api/v1/auth/login')
        console.log(res)
    },
}))

export default authStore;
