import axiosInterface from "../../interseptor";

export const addTask = (data, dates, setItems) => {
    axiosInterface.post(`/todo?date=${dates}`, {
            title: data.title
        }
    ).then(response => {
        toast(`Element ${data.title} added to missions`)
        setItems(response.data.todos)
    })
        .catch(error => console.log(error))
}