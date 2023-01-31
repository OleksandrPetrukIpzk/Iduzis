import axiosInterface from "../../interseptor";

export const login = (data, navigate, setIsLogin) => {

    axiosInterface.post('auth/login/', data)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('person', data.username);
            localStorage.setItem('isLogin', "true");
            setIsLogin('true');
            navigate('/main', {replace: true});
        }).catch(error => console.log(error))
}