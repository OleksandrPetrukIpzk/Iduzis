import {toast} from "react-toastify";
import axios from 'axios';

const axiosInterface = axios.create({
    baseURL: 'http://localhost:5000/'
    });
axiosInterface?.interceptors?.response?.use(
    async (config) =>{
        config.headers.Authorization = `${localStorage.getItem('userTokenFroLogin')}`
        return config;
    },
    error => {
        if(error.response.status === 401){
            toast.error("Error witch authentication")
        }
        else {
            toast.error("Something wrong")
        }
    }
)
axiosInterface?.interceptors?.request?.use(
    async (config) =>{
        config.headers.Authorization = `${localStorage.getItem('userTokenFroLogin')}`
        return config;
    }
)
export default axiosInterface;
