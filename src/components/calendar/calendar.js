import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';
import "./style.css";

export const Calendar = () => {
    const {setDate} = useContext(Context)
    const [selected, setSelected] = useState(new Date());
    const fromYear = 2021;
    useEffect(() => {
        setDate(selected);
    }, [selected]);

    return (
        <DayPicker mode='single'
                   selected={selected}
                   onSelect={setSelected}
                   fromYear={fromYear}
                   className='calendar'
        />
    )
}