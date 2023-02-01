import {toast} from "react-toastify";
import {convertDates} from "./convertDates";
import axiosInterface from "../../incerceptor";

export const deleteElement = (value, title, date, setListElement) => {
    axiosInterface.delete(`/todo/${value}?date=${convertDates(date)}`).then(response => {
        setListElement(response.data.todos);
        toast(`Element ${title} was delete`)
    }).catch(() => toast.error('Problem witch server'))
}

export const checkElement = (value, title, check, date, setListElement) => {
    axiosInterface.patch(`/todo/${value}?date=${convertDates(date)}`)
        .then(response => {
                setListElement(response.data.todos)
                if (!check) {
                    toast(`${title} complete`)
                } else {
                    toast(`${title} dont complete`)
                }
            }
        ).catch(() => toast.error('Problem witch server'))
}