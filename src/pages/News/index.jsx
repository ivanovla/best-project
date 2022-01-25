import './index.css';
import React, { useState } from 'react';
import AddReview from './AddReview';
import Modal from './ModalWindow';

const menuItems = [
    {
        name: 'Jonh Dogovich',
        src: 'https://thumbs.dreamstime.com/z/%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0-%D1%81%D0%B0%D0%BD%D1%82%D1%8B-46045502.jpg',
        header: 'Скоро новый год!',
        paragraph: 'Новый год — праздник веселый и шумный. Петарды, хлопушки, громкая музыка — все это создает хорошее настроение у людей, но может стать источником стресса для домашних животных. Домашние животные восприимчивы к шуму и ярким вспышкам света. Они могут испугаться взрыва петарды или фейерверка и убежать. В состоянии стресса питомец может покалечить себя или нанести травмы людям. Особенно это касается крупных собак. Специалисты рекомендуют выгулять собаку до начала новогодних празднований.' 
    },
    { 
        name: 'Фунтик',
        src: 'https://lemurrr.ru/medias/sys_master/images/hca/h91/8904033435678.jpg',
        header: 'Что едят морские свинки',
        paragraph: 'Содержание морских свинок в домашних условиях весьма распространено. Для проживания питомца нужно создать комфортные условия и подобрать правильное питание. Для обеспечения нормальной жизнедеятельности и сохранения здоровья морских свинок необходимо кормить такой пищей, которую они могли бы употреблять в естественной среде обитания.'
    },
    {
        name:'Барон на выезде',
        src: 'https://lemurrr.ru/medias/sys_master/images/h55/h17/8904687747102.jpg',
        header: 'Путешествие с собакой',
        paragraph:'Отправляясь в отпуск с собакой в другой город или страну, владельцу нужно подготовить целый комплект документов на хвостатого пассажира. Такие правила для провоза животных распространены во всех странах мира и контролируются компетентными органами, обеспокоенными рисками заражения местных животных различными инфекциями, которые могут передаваться от больных приезжих собак.'
    }
]
    

    const NewsPage = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2,'0');
    const mm = String(today.getMonth()+1).padStart(2,'0');
    const yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    const [array, setArray] = useState(menuItems);

    const Add = (name, src, header, paragraph) => {
        setArray([...array, {name, src, header, paragraph}])
    } 
    const Delete = (targetHeader) => setArray(
      array.filter(({header}) => header !== targetHeader)
    )

    const [modalActive, setModalActive] = useState(false)

    return <div className={'page'}>

        <AddReview add={Add}/>

        <Modal active={modalActive} setActive={setModalActive}>
        <p className='modal_question'>Вы уверены, что хотите удалить?</p>
          <div>
            <button className='btn_yes'>Да</button>
            <button className='btn_no'>Нет</button>
          </div>
        </Modal>

        <button className='new_btn' onClick={() => setModalActive(true)}>Открыть окно</button>
        
      {
        array.map(item =>
           <div key={item.header} className={'post'}>
           <img src={item.src} alt="dog" width="250" height="260" className={'leftimg'}/>
           <h1 className={'post__author'}> {item.name}
           </h1>
           <h2 className={'post__header'}> {item.header}
           </h2>
           <p className={'post__paragraph'}> {item.paragraph}
           </p>
           {today}
           <button className={'delete_btn'} onClick={e => Delete(item.header)}>Удалить</button>
            </div> 
      )}
      
    </div>
 
}
export default NewsPage;

