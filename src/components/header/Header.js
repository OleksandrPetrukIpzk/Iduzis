import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context";
import { ReactComponent as Logo } from './svg.svg'
import {exitUser} from "./exitUser";
import './style.css';

export const Header = () => {
    const navigate = useNavigate()
    const {setIsLogin} = useContext(Context)
    const loginPerson = localStorage.getItem('person');


    return (
        <div className='header'>
            <Logo/>
            <div>Hello {loginPerson}
                <button className='exit' onClick={() => exitUser(navigate, setIsLogin)}>Exit</button>
            </div>

        </div>
    )
}