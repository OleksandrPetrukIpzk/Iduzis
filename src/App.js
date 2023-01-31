import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FormLogin } from "./components/todoList/FormLogin";
import { FormRegistration } from "./components/todoList/FormRegistration";
import { MainPage } from "./components/MainPage/MainPage";
import { Navigate } from "react-router-dom";
import { Context } from './context'
import './style.css';

function App() {
    const [date, setDate] = useState(new Date());
    const [items, setItems] = useState([]);
    const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'))
    const router = createBrowserRouter([{
        path: '/',
        element: isLogin === 'true' ? <Navigate to='/main' replace={true}/> : <Navigate to='/login' replace={true}/>,
    },
        {
            path: '/login',
            element: isLogin === 'false' ?  <FormLogin/> : <Navigate to='/main' replace={true}/>,
        },
        {
            path: '/registration',
            element: isLogin === 'false' ? <FormRegistration /> : <Navigate to='/main' replace={true}/>
        },
        {
            path: '/main',
            element: isLogin === 'true' ? <MainPage/> : <Navigate to='/login' replace={true}/>,
        }])
    return (
        <Context.Provider value={{date, setDate, items, setItems, isLogin, setIsLogin}}>
            <RouterProvider router={router} />
        </Context.Provider>
    );
}

export default App;
