import {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {Modal} from "./Modal";
import {format} from "date-fns";
import {toast} from "react-toastify";
import {Context} from "../../context";
import axiosInterface from "../../interseptor";
export const HeaderButton = () => {
    const {date, setItems} = useContext(Context);
    const dates = format(date, "yyyy-MM-dd");
    const {register, handleSubmit} = useForm()
    const [modal, setModal] = useState(false)
    const submit = data => {
        axiosInterface.post(`/todo?date=${dates}`, {
                title: data.title
            }
        ).then(response => {
            toast(`Element ${data.title} added to missions`)
            setItems(response.data.todos)
        })
            .catch(error => console.log(error))
    }
    return (<div className="header__buttons">
        <button className='plus' onClick={() => setModal(true)}>+</button>
        <Modal active={modal} setActive={setModal}>
            <form className='form' onSubmit={handleSubmit(submit)}>
                <input className='task' type="text" {...register('title', {required: true, min: 1})}/>
                <input id='submit' type='submit' value='Add task'/>
            </form>
        </Modal>
    </div>)
}