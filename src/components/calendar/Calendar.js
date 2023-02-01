import React, {useContext, useEffect, useState} from "react";
import {DayPicker} from "react-day-picker";
import {Context} from "../../context";
import {dateToday, startYear} from "../constants";
import 'react-day-picker/dist/style.css';
import "./style.css";

export const Calendar = () => {
    const {setDate} = useContext(Context)
    const [selected, setSelected] = useState(dateToday);

    useEffect(() => {
        setDate(selected);
    }, [selected]);

    return (
        <DayPicker mode='single'
                   selected={selected}
                   onSelect={setSelected}
                   fromYear={startYear}
                   className='calendar'
        />
    )
}