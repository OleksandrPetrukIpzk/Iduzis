import './style.css'


export const Modal = ({active, setActive, children}) => {
    const closeModal = () =>{
        setActive(false)
    }
    return (<div className={active ? 'modal active' : 'modal'} onClick={closeModal}>
        <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
            <p className='clouse' onClick={closeModal}>X</p>
            {children}
        </div>
    </div>)
}