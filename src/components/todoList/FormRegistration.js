import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import './registrationStyle.css'
import {formParametrs, objectsForRegistration} from "../constants";
import {registrationUser} from "./registrationUser";

export const FormRegistration = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate()
    const replaceToRegistrationUser = data => {
        registrationUser(data, navigate)
    }

    return (
        <div className='register__page' >
            <h2 className='h2'>Sign up to IDuzis</h2>
            <p className='gray'>Already member?
                <Link id='login' className='login' to='http://localhost:3000/login' > I have account</Link>
            </p>
            <form className='form' onSubmit={handleSubmit(replaceToRegistrationUser)}>
                {objectsForRegistration?.map(item=>
                    <input type={item.type} placeholder={item.placeholder}{...register(item.name, formParametrs)}/>
                )}
        <input id='submit' type='submit' value='Register'/>
    </form>

        </div>
    )
}