import {useContext, useEffect} from "react";
import {format} from 'date-fns'
import {Notification} from "./Notification";
import {HeaderButton} from "./HeaderButton";
import {List} from "./List";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import axiosInterface from "../../interseptor";
import {Context} from "../../context";
import './style.css';
import 'react-tabs/style/react-tabs.css';
import 'react-toastify/dist/ReactToastify.css';

export const TodoList = () => {

    const {date, items, setItems} = useContext(Context)
    const dates = format(date, "yyyy-MM-dd");
    console.log(dates);
    useEffect(() => {
        axiosInterface.get('todo', {
            params: {
                date: dates,
            }
        }).then(response => {
            setItems(response.data.todos);
            console.log(response.data.todos);
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

                <div className='active'>
                    <HeaderButton/>
                    {items?.map(itemFilter => <List itemFilter={itemFilter} ids={0}/>)}
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    {items?.filter(item => item.checked === false).map(itemFilter =>
                        <List itemFilter={itemFilter}/>
                    )}
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    {items?.filter(item => item.checked === true).map(itemFilter =>
                        <List itemFilter={itemFilter} ids={2}/>
                    )}
                </div>
            </TabPanel>
        </Tabs>
    </div>)
}