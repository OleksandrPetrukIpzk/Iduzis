import axios from "axios";
import {toast} from "react-toastify";

export const registrationUser = (data, navigate) => {
    axios.post('http://localhost:5000/auth/register/', data)
        .then(() =>  navigate('/login', {replace: true}))
        .catch(() => toast.warning('Data does not exist'))
}