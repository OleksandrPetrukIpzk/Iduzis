import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../context";
import axiosInterface from "../../interseptor";
import './registrationStyle.css'

export const FormLogin = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const {setIsLogin} = useContext(Context)
    const login = data => {
        axiosInterface.post('auth/login/', data)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('person', data.username);
                setIsLogin('true');
                localStorage.setItem('isLogin', "true");
                navigate('/main', {replace: true});
            }).catch(error => console.log(error))
    }

    return (<div className='register__page'>
        <h2 className='h2'>Log in to IDuzis</h2>
        <p className='gray'>Already member?<a className='login' href='http://localhost:3000/registration'> I dont have
            account</a></p>

        <form className='form' onSubmit={handleSubmit(login)}>
            <input type="text" placeholder="username"
                   {...register("username", {
                       required: true,
                       max: 20,
                       min: 1,
                       maxLength: 80
                   })} />
            <input type="password" placeholder="password"
                   {...register("password", {
                       max: 40,
                       min: 1,
                       maxLength: 40
                   })} />

            <input id='submit' type="submit" value='Login'/>

        </form>
    </div>)
}