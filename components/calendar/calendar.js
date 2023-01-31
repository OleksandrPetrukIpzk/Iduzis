import React, {useContext, useEffect, useState} from "react";
import {DayPicker} from "react-day-picker";
import {Context} from "../../context";
import 'react-day-picker/dist/style.css';
import "./style.css";

export const Calendar = () => {
    const {setDate} = useContext(Context)
    const [selected, setSelected] = useState(new Date());

    useEffect(() => {
        setDate(selected);
    }, [selected]);

    return (
        <DayPicker mode='single'
                   selected={selected}
                   onSelect={setSelected}
                   fromYear={2021}
                   className='calendar'
        />
    )
}