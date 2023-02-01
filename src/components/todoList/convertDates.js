import {format} from "date-fns";

export const convertDates = (date) =>{
    const dates = format(date, "yyyy-MM-dd");
    return dates;
}