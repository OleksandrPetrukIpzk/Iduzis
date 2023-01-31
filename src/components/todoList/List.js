import {useContext} from "react";
import {format} from "date-fns";
import {toast} from "react-toastify";
import {Context} from "../../context";
import axiosInterface from "../../interseptor";

export const List = ({itemFilter, ids}) =>{
    const {date, setItems} = useContext(Context);
    const dates = format(date, "yyyy-MM-dd");
    const deleteElement = (value, title) => {
        axiosInterface.delete(`/todo/${value}?date=${dates}`).then(response => {
            setItems(response.data.todos);
            toast(`Element ${title} was delete`)
        }).catch(error => console.log(error))
    }
    const checkElement = (value, title, check) => {
        axiosInterface.patch(`/todo/${value}?date=${dates}`)
            .then(response => {
                    setItems(response.data.todos)
                    if (check === false) {
                        toast(`${title} complete`)
                    } else {
                        toast(`${title} dont complete`)
                    }
                }
            ).catch(error => console.log(error))
    }
    const {id, title, checked} = itemFilter;
    return  <div key={id + ids} className='items'><p>{title}</p>
        <div className='inputs'>
            <input onChange={() => checkElement(id, title, checked)}
                   className='check' type='checkbox'
                   checked={checked}/>
            <button className='delete' onClick={() => deleteElement(id, title)}>Delete
            </button>
        </div>
    </div>
}