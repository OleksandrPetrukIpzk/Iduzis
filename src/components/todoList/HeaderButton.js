import {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {addTask} from "./addTask";
import {convertDates} from "./convertDates";
import {Modal} from "./Modal";
import {Context} from "../../context";

export const HeaderButton = () => {
    const {date, setListElement} = useContext(Context);
    const {register, handleSubmit} = useForm()
    const [modal, setModal] = useState(false)

    return (<div className="header__buttons">
        <button className='plus' onClick={() => setModal(true)}>+</button>
        <Modal active={modal} setActive={setModal}>
            <form className='form' onSubmit={handleSubmit((data)=> addTask(data,convertDates(date), setListElement))}>
                <input className='task' type="text" {...register('title', {required: true})}/>
                <input id='submit' type='submit' value='Add task'/>
            </form>
        </Modal>
    </div>)
}