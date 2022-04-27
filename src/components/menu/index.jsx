import React from 'react';
import './index.css';
import { withRouter } from "react-router-dom";

const menuItems = [
    {
        name: 'Main',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Video',
        path: '/video'
    },
    {
        name: 'History',
        path: '/history'
    },
{
        name: 'News',
        path: '/news'
}
]

const Menu = ({history}) => {
    return <div className={'menu'}>
        {menuItems.map((item =>
            <div
                className={history.location.pathname === item.path ? 'active' : ''}
                onClick={event => history.push(item.path)}
                key={item.path}>
                {item.name}
            </div>))}
    </div>
}

export default withRouter(Menu);
