import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../context";
import {ReactComponent as Logo} from './svg.svg'
import './style.css';
export const Header = () => {
    const navigate = useNavigate()
    const {setIsLogin} = useContext(Context)
    const exitUser = () => {

        localStorage.removeItem('token');
        localStorage.removeItem('person');
        setIsLogin('false');
        localStorage.setItem('isLogin', "false")
        navigate('/login', {replace: true})

    }
    return (
        <div className='header'>
            <Logo/>
            <div>Hello {localStorage.getItem('person')}
                <button className='exit' onClick={() => exitUser()}>Exit</button>
            </div>

        </div>
    )
}