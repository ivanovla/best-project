import React from 'react';
import './index.css';

const Pagination = ({countriesPerPage, totalCountries, paginate, prevPage, nextPage, maxPageNumberLimit, minPageNumberLimit, currentPage}) => {
    const pageNumbers = []

    const btnPrev = <div className='paginate-btn' onClick={prevPage}>Prev</div>
    const btnNext = <div className='paginate-btn' onClick={nextPage}>Next</div>
    
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }
    
    // if (currentPage < maxPageNumberLimit + 1 && currentPage > minPageNumberLimit) {
        return (
                <div> 
                {btnPrev}
                    {
                    pageNumbers.map((number) => (
                            <div 
                                className={`paginate-btn ${currentPage == number ? 'active' : ''}`}
                                key={number} 
                                onClick={() => paginate(number)}>
                                {number}
                            </div>
                    ))
                    }
                 {btnNext}
                </div>
        )
    // } else {
    //     return null
    // }
        
}


export default Pagination

// className={currentPage == number ? 'active' : null}
// (number < maxPageNumberLimit + 1 && number > minPageNumberLimit)