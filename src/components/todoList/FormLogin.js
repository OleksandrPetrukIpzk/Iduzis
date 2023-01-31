import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context";
import { login } from "./login";
import './registrationStyle.css'

export const FormLogin = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const {setIsLogin} = useContext(Context)
    const maxLength = 40;
    const minmaxLength = 1;
    return (<div className='register__page'>
        <h2 className='h2'>Log in to IDuzis</h2>
        <p className='gray'>Already member?<a className='login' href='http://localhost:3000/registration'> I dont have
            account</a></p>

        <form className='form' onSubmit={handleSubmit((data) => login(data, navigate, setIsLogin))}>
            <input type="text" placeholder="username"
                   {...register("username", {
                       required: true,
                       max: maxLength,
                       min: minmaxLength,
                   })} />
            <input type="password" placeholder="password"
                   {...register("password", {
                       required: true,
                       max: maxLenght,
                       min: minmaxLength,
                   })} />

            <input id='submit__information' type="submit" value='Login'/>

        </form>
    </div>)
}