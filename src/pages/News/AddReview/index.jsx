import './index.css';
import React, {useState} from 'react';

function AddReview(props) {
    const {add} = props;
    const [name, setName] = useState('');
    const [src, setSrc] = useState('');
    const [header, setHeader] = useState('');
    const [paragraph, setParagraph] = useState('');
     return <div>
        <input onChange={e => setName(e.target.value)} placeholder={'Введите имя автора'}/>
        <input onChange={e => setSrc(e.target.value)} placeholder={'Введите url картинки'}/>
        <input onChange={e => setHeader(e.target.value)} placeholder={'Введите заголовок'}/>
        <input onChange={e => setParagraph(e.target.value)} placeholder={'Введите текст'}/>
        <button className={'add_btn'} onClick={e => add(name, src, header, paragraph)}>Добавить</button>
    </div>
}
export default AddReview;

