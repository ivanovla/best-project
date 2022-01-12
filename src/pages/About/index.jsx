import React from 'react';
import './index.css';

const AboutPage = () => {
    return <div className={'page'}>

        <div className={'info'}>
           <h1 className={'heading'}>EMAIL</h1>
           <p1 className={'text'}>info@comdadi.com</p1>
        </div>

        <div className={'info'}>
            <h2 className={'heading'}>TELEPHONE</h2>
             <p2 className={'text'}>+30 6977 447 033</p2>
        </div>

        <div className={'info'}>
            <h3 className={'heading'}>SKYPE</h3>
             <p3 className={'text'}>combadi</p3>
        </div>

        <div className={'info'}>
            <h4 className={'heading'}>ADRESS</h4>
        </div>
        <div className={'adress'}> 
             28A Epidavrou Str.
             </div>         
             <div className={'adress'}>
             15233 Halandri, Greece
             </div>
            
    </div>
}

export default AboutPage;
