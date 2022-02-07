import React, { useEffect, useState } from 'react';
import Modal from '../ModalWindow';
import './index.css'


const Edit = ({open, setOpen, item}) => {
    const [name, setName] = useState(item.name);
    const [src, setSrc] = useState(item.src);
    const [header, setHeader] = useState(item.header);
    const [paragraph, setParagraph] = useState(item.paragraph);
    useEffect(() => {
        setName(item.name);
        setSrc(item.src);
        setHeader(item.header);
        setParagraph(item.paragraph);
    },[item])
    return (
        <Modal active={open} setActive={setOpen}>

          <input className="edit_data"  onChange={e => setName(e.target.value)} value={name}/>
          <input className="edit_data"  onChange={e => setSrc(e.target.value) }value={src}/>
          <input className="edit_data"  onChange={e => setHeader(e.target.value)} value={header}/>
          <input className="edit_data"  onChange={e => setParagraph(e.target.value)} value={paragraph}/>

          <button className="btn_edit">Применить</button>
          <button className="btn_edit" onClick={() => setOpen(false)}>Отменить</button>
        
        </Modal>
    )
}

export default Edit;

