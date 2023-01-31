import { useContext, useEffect } from "react";
import { format } from 'date-fns'
import { Notification } from "./Notification";
import { HeaderButton } from "./HeaderButton";
import { List } from "./List";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import axiosInterface from "../../interseptor";
import { Context } from "../../context";
import { convertDates } from "./convertDates";
import './style.css';
import 'react-tabs/style/react-tabs.css';
import 'react-toastify/dist/ReactToastify.css';

export const TodoList = () => {

    const {date, items, setItems} = useContext(Context)
    useEffect(() => {
        axiosInterface.get('todo', {
            params: {
                date: convertDates(date),
            }
        }).then(response => {
            setItems(response.data.todos);
        }).catch(error => console.log(error));

    }, [date])
    return (<div className='todo'>
        <Notification/>
        <Tabs className='tabs'>
            <TabList>
                <Tab>All</Tab>
                <Tab>Active</Tab>
                <Tab>Complete</Tab>
            </TabList>
            <TabPanel>
                    <HeaderButton/>
                    {items?.map(itemFilter => <List itemFilter={itemFilter} ids={0}/>)}
            </TabPanel>
            <TabPanel>
                    {items?.filter(item => item.checked === false).map(itemFilter =>
                        <List itemFilter={itemFilter}/>
                    )}
            </TabPanel>
            <TabPanel>
                    {items?.filter(item => item.checked === true).map(itemFilter =>
                        <List itemFilter={itemFilter} ids={2}/>
                    )}
            </TabPanel>
        </Tabs>
    </div>)
}