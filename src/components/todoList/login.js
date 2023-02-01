import axiosInterface from "../../incerceptor";
import {pathMainPage} from "../constants";
import {toast} from "react-toastify";

export const login = (data, navigate, setIsLogin) => {
    axiosInterface.post('auth/login/', data)
        .then(response => {
            localStorage.setItem('userTokenFroLogin', response.data.token);
            localStorage.setItem('personInformation', data.username);
            localStorage.setItem('isLogin', "true");
            setIsLogin(true);
            navigate(pathMainPage, {replace: true});
        }).catch(() => toast.warning("Data does not exist"))
}