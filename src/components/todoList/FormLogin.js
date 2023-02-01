import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../context";
import {login} from "./login";
import './registrationStyle.css'
import {formParametrs} from "../constants";

export const FormLogin = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const {setIsLogin} = useContext(Context)
    const loginAccount = data =>{
        login(data, navigate, setIsLogin)
    }

    return (<div className='register__page'>
        <h2 className='h2'>Log in to IDuzis</h2>
        <p className='gray'>Already member?
            <Link className='login' to='http://localhost:3000/registration'> I dont have account</Link>
        </p>

        <form className='form' onSubmit={handleSubmit(loginAccount)}>
            <input type="text" placeholder="username"
                   {...register("username",
                       formParametrs
                   )} />
            <input type="password" placeholder="password"
                   {...register("password",
                       formParametrs
                   )} />

            <input id='submit' type="submit" value='Login'/>

        </form>
    </div>)
}