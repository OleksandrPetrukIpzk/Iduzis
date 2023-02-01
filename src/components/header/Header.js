import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {ReactComponent as Logo} from '../../img/Logo.svg'
import {exitUser} from "./exitUser";
import {userName} from "../constants";
import {Context} from "../../context";
import './style.css';

export const Header = () => {
    const navigate = useNavigate()
    const {setIsLogin} = useContext(Context)
    const signOut = () =>{
        exitUser(navigate, setIsLogin);

    }

    return (
        <div className='header'>
            <Logo/>
            <p>Hello {userName}
                <button className='exit' onClick={signOut}>Exit</button>
            </p>

        </div>
    )
}