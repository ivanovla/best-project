import './index.css';
import React, {useState} from 'react';
import imgadd from '../../../assets/images/addicon.svg'

function AddReview(props) {
    const {add} = props;
    const [name, setName] = useState('');
    const [src, setSrc] = useState('');
    const [header, setHeader] = useState('');
    const [paragraph, setParagraph] = useState('');
     return <div className="input">
        <input className="add_data" onChange={e => setName(e.target.value)} placeholder={'Введите имя автора'}/>
        <input className="add_data" onChange={e => setSrc(e.target.value)} placeholder={'Введите url картинки'}/>
        <input className="add_data" onChange={e => setHeader(e.target.value)} placeholder={'Введите заголовок'}/>
        <input className="add_data" onChange={e => setParagraph(e.target.value)} placeholder={'Введите текст'}/>
        <button className={'add_btn'} onClick={e => add(name, src, header, paragraph)}><img src={imgadd} width="25px" height="25px"/></button>
    </div>
}
export default AddReview;

