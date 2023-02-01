import {Header} from "components/header/Header";
import {Calendar} from "components/calendar/Calendar";
import {TodoList} from "components/todoList/TodoList";
export const MainPage = () =>{
    return(<div>
        <Header/>
        <div className='main'>
            <Calendar/>
            <TodoList/>
        </div>
    </div>)
}
