import { Header } from "../header/Header";
import { Calendar } from "../calendar/calendar";
import { TodoList } from "../todoList/TodoList";
export const MainPage = () =>{
    return(<div>
        <Header/>
        <div className='main'>
            <Calendar/>
            <TodoList/>
        </div>
    </div>)
}
