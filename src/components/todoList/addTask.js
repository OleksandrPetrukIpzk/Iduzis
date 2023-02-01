import {toast} from "react-toastify";
import axiosInterface from "../../incerceptor";

export const addTask = (data, dates, setListElement) => {
    const {title} = data;
    axiosInterface.post(`/todo?date=${dates}`, {
            title: title
        }
    ).then(response => {
        toast(`Element ${title} added to missions`)
        setListElement(response.data.todos)
    })
        .catch(() => toast.error('Problem witch server'))
}