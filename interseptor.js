import axios from "axios";

const axiosInterface = axios.create({
    baseURL: 'http://localhost:5000/'
    }

);
axiosInterface.interceptors.response.use(
    async (config) =>{
        config.headers.Authorization = `${localStorage.getItem('token')}`
        return config;
    }
)

axiosInterface.interceptors.request.use(
    async (config) =>{
        config.headers.Authorization = `${localStorage.getItem('token')}`
        return config;
    }
)
export default axiosInterface;
