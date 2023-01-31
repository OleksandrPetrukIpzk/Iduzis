import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './registrationStyle.css'

export const FormRegistration = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate()
    const registration = data => {
        axios.post('http://localhost:5000/auth/register/', data)
                .then(() =>  navigate('/login', {replace: true}))
            .catch(error => console.log(error))
    }
    return (
        <div className='register__page'>
            <h2 className='h2'>Sign up to IDuzis</h2>
            <p className='gray'>Already member? <a className='login' href='http://localhost:3000/login'> I have account</a></p>
            <form className='form' onSubmit={handleSubmit(registration)}>
        <input  type='text' placeholder='User Name' {...register('username')}/>
        <input  type='email' placeholder='Email' {...register('email')} />
        <input  type='password' placeholder='Password' {...register('password')}/>
        <input  type='password' placeholder='Confirm Password' {...register('confirmPassword')}/>
        <input id='submit__information'   type='submit' value='Register'/>

    </form>

        </div>
    )
}