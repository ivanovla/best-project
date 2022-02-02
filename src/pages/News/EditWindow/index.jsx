import React from 'react';
import './index.css';

const Edit = ({open, setOpen, children}) => {
    return (
        <div className={open ? "edit active" : "edit"} onClick={() => setOpen(false)}>
            <div className={open ? "edit_content active" : "edit_content"} onClick={e => e.stopPropagation()}>
            {children}
            </div>
        </div>
    )
}

export default Edit;

