import {Tab, TabList, Tabs} from "react-tabs";
import { tabInfo } from '../constants'

export const TabComponent = ({children}) =>{

    return(
        <Tabs className='tabs'>
            <TabList >
                {tabInfo.map(item => <Tab>{item}</Tab>)}
            </TabList>
            {children}
        </Tabs>
    )
}