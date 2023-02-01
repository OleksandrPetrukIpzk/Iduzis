import {useContext} from "react";
import {checkElement, deleteElement} from "./deleteAndCheckElements";
import {Context} from "../../context";

export const ListElement = ({itemFilter, ids}) =>{
    const {date, setListElement} = useContext(Context);
    const {id, title, checked} = itemFilter;
    const deleteElementInCheckbox = () => {
        deleteElement(id, title, date, setListElement)
    }
    const checkElementInCheckbox = () => {
    checkElement(id, title, checked, date, setListElement)
    }

    return  <div key={id + ids} className='items'><p>{title}</p>
        <div className='inputs'>
            <input onChange={checkElementInCheckbox}
                   className='check' type='checkbox'
                   checked={checked}/>
            <button className='delete' onClick={deleteElementInCheckbox}>Delete
            </button>
        </div>
    </div>
}