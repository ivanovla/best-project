import './index.css';
import React, { useState, useContext } from 'react';
import AddReview from './AddReview';
import Modal from './ModalWindow';
import EditWindow from './EditWindow';
import imgedit from '../../assets/images/editpen.svg'
import imgdelete from '../../assets/images/deleteicon.svg'
import UserContext from '../../UserContext';


const menuItems = [
  {
    name: 'Author1',
    src: 'https://st4.depositphotos.com/4263287/26660/v/600/depositphotos_266604530-stock-illustration-connected-js-j-s-black.jpg',
    header: 'Header1',
    paragraph: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    name: 'Author2',
    src: 'https://st4.depositphotos.com/4263287/26660/v/600/depositphotos_266604530-stock-illustration-connected-js-j-s-black.jpg',
    header: 'Header2',
    paragraph: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    name: 'Author3',
    src: 'https://st4.depositphotos.com/4263287/26660/v/600/depositphotos_266604530-stock-illustration-connected-js-j-s-black.jpg',
    header: 'Header3',
    paragraph: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
]


const NewsPage = () => {

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = dd + '.' + mm + '.' + yyyy;


  const Add = (name, src, header, paragraph) => {
    setArray([...array, { name, src, header, paragraph }]);
  }

  const Delete = (targetHeader) => {
    setArray(array.filter(({ header }) => header !== targetHeader));
  }

  const Edit = ({ name, src, header, paragraph }) => {
    const index = array.findIndex(item => item.header == activeItem.header);
    array[index] = ({ name, src, header, paragraph });
    setArray([...array]);
  }

  const [array, setArray] = useState(menuItems);

  const [modalActive, setModalActive] = useState(false);

  const [activeNew, setActiveNew] = useState(null);

  const [activeItem, setActiveItem] = useState({});

  const [editOpen, setEditOpen] = useState(false);

  const User = useContext(UserContext)


  const GetButtons = (item) => {
    if (User) {
      return (<>
        <button className={'delete_btn'} onClick={() => {
          setModalActive(true);
          setActiveNew(item.header);
        }}><img src={imgdelete} width="25px" height="25px" /></button>

        <button className={'edit_btn'} onClick={() => {
          setEditOpen(true)
          setActiveItem(item)
        }}><img src={imgedit} width="30px" height="30px" /></button>
      </>);
    }
  }

  return <div className={'page'}>

    <AddReview add={Add} />

    <Modal active={modalActive} setActive={setModalActive}>
      <p className='modal_question'>Вы уверены, что хотите удалить?</p>
      <div>
        <button className="btn_yes" onClick={() => {
          Delete(activeNew);
          setModalActive(false);
        }}>Да</button>
        <button className="btn_no" onClick={() => setModalActive(false)}>Нет</button>
      </div>
    </Modal>

    <EditWindow open={editOpen} setOpen={setEditOpen} item={activeItem} edit={Edit}></EditWindow>

    {
      array.map(item =>
        <div key={item.header} className={'post'}>
          <img src={item.src} alt="picture" width="250" height="260" className={'leftimg'} />
          <h1 className={'post__author'}> {item.name}
          </h1>
          <h2 className={'post__header'}> {item.header}
          </h2>
          <p className={'post__paragraph'}> {item.paragraph}
          </p>

          {today}

          {GetButtons(item)}

        </div>
      )
    }
  </div>
}

export default NewsPage;

