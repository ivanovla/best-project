import React from 'react';
import './index.css';

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() =>setActive(false)}>
            <div className={active ? 'modal_content active' : 'modal_content'} onclick={e => e.stopPropagation()}>
            {children}
            </div>
        </div>
    )
}

export default Modal;