import {useContext, useEffect} from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import axiosInterface from "../../incerceptor";
import {Context} from "../../context";
import {Notification} from "./Notification";
import {HeaderButton} from "./HeaderButton";
import {ListElement} from "./ListElement";
import {convertDates} from "./convertDates";
import './style.css';
import 'react-tabs/style/react-tabs.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import {TabComponent} from "./TabComponent";

export const TodoList = () => {
    const {date, listElement, setListElement} = useContext(Context)

    useEffect(() => {
        axiosInterface.get('todo', {
            params: {
                date: convertDates(date),
            }
        }).then(response => {
            setListElement(response.data.todos);
        }).catch(() => toast.error('Problem witch server'));
    }, [date])

    return (<div className='todo'>
<TabComponent>
            <TabPanel>
                <HeaderButton/>
                {listElement?.map(itemFilter => <ListElement itemFilter={itemFilter} ids={0}/>)}
            </TabPanel>
            <TabPanel>
                {listElement?.filter(item => !item.checked).map(itemFilter =>
                    <ListElement itemFilter={itemFilter}/>
                )}
            </TabPanel>
            <TabPanel>
                {listElement?.filter(item => item.checked).map(itemFilter =>
                    <ListElement itemFilter={itemFilter} ids={2}/>
                )}
            </TabPanel>
</TabComponent>
    </div>)
}