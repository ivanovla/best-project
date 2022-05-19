import React from 'react';
import './index.css';

const Pagination = ({countriesPerPage, totalCountries, paginate}) => {
    const pageNumbers = []
    
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <div> {
                pageNumbers.map(number => (
                        <ul className='page-btn' key={number}>
                        <li className='btn' onClick={() => paginate(number)}>
                            {number}
                        </li>
                        </ul>
                ))
            }
            </div>
        </div>
    )
}


export default Pagination