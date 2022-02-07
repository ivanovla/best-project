import React from 'react';
import './index.css';

const Modal = ({active, setActive, children, className}) => { //мы в итоге className где использовали? почему не подсвечивается?
    return (
        <div className={active ? 'modal active' : 'modal'}> 
            <div className={active ? 'modal_content active ' : 'modal_content'} onclick={e => e.stopPropagation()}>
            {children}
            </div>
        </div> // почему не работал stopPropagation? Убрал onClick={() =>setActive(false)}
    )
}

export default Modal;