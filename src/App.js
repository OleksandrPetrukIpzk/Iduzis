import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { FormLogin } from "./components/todoList/FormLogin";
import { FormRegistration } from "./components/todoList/FormRegistration";
import { MainPage } from "./components/MainPage/MainPage";
import { Context } from './context'
import {dateToday, isLoginUser, pathLogin, pathRegistrationUser,pathMainPage} from './components/constants'
import {Notification} from "./components/todoList/Notification";
import './style.css';

function App() {
    const [date, setDate] = useState(dateToday);
    const [listElement, setListElement] = useState([]);
    const [isLogin, setIsLogin] = useState(isLoginUser);

    const router = createBrowserRouter([{
        path: '/',
        element: isLogin ? <Navigate to={pathMainPage} replace/> : <Navigate to={pathLogin} replace/>,
    },
        {
            path: pathLogin,
            element: !isLogin  ?  <FormLogin/> : <Navigate to={pathMainPage} replace/>,
        },
        {
            path: pathRegistrationUser,
            element: !isLogin  ? <FormRegistration /> : <Navigate to={pathMainPage} replace/>
        },
        {
            path: pathMainPage,
            element: isLogin  ? <MainPage/> : <Navigate to={pathLogin} replace/>,
        }])

    return (
        <Context.Provider value={{date, setDate, listElement, setListElement, isLogin, setIsLogin}}>
            <Notification/>
            <RouterProvider router={router} />
        </Context.Provider>
    );
}

export default App;
