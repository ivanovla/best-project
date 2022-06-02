import React, { useMemo } from 'react';
import Select from '@material-ui/core/Select';
import './index.css';
import MenuItem from '@material-ui/core/MenuItem';

const Pagination = ({countriesPerPage, totalCountries, paginate, prevPage, nextPage, currentPage, countButtons, countriesValue}) => {
    const pageNumbers = [];

    const btnPrev = <div className='paginate-btn' onClick={prevPage}>Prev</div>
    const btnNext = <div className='paginate-btn' onClick={nextPage}>Next</div>

    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    const generateButtons = (start, end) => {
        const workArr = [];
        for (let i = start; i <= end; i++) {
            workArr.push(<div
                className={`paginate-btn ${currentPage == i ? 'active' : ''}`}
                key={i}
                onClick={() => paginate(i)}>
                {i}
            </div>)
        }
        return workArr;
    }

    const buttons = useMemo(() => {
        if (currentPage + countButtons < pageNumbers.length) {
            return generateButtons(currentPage, currentPage + countButtons)
        } else {
            return generateButtons(pageNumbers[pageNumbers.length - 1] - countButtons, pageNumbers[pageNumbers.length - 1])
        }
    }, [currentPage, pageNumbers]);

        return (
                <div>
                {btnPrev}
                {buttons}
                {btnNext}
                    <Select 
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={countriesValue}
                        value={countriesPerPage}
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                </div>
        )
}

Pagination.defaultProps = {
    countButtons: 6
}

export default Pagination

