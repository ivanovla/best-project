import React from 'react';
import './index.css';

const Countries = ({countries}) => {

    return (
        <ul>
        {
        countries.map(country => <div className={'list'}>
            {country.name.common}
            <img src={country.flags.png} alt='flag' className='flags'></img>
            </div>)
        }
        </ul>
    )
}

export default Countries