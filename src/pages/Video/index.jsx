import React, { useEffect, useState } from 'react';
// import {} from '@mui/material'
import Countries from './Countries';
import Pagination from './Pagination';
import './index.css';

const VideoPage = () => {

const [countries, setCountries] = useState([])
const [currentPage, setCurrentPage] = useState(1)
const [countriesPerPage, setCountriesPerPage] = useState(20)

useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((countries) => setCountries(countries));
 
}, []);

const lastCountryIndex = currentPage * countriesPerPage
const firstCountryIndex = lastCountryIndex - countriesPerPage
const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex)

const paginate = pageNumber => setCurrentPage(pageNumber)
const nextPage = () => setCurrentPage(prev => prev + 1)
const prevPage = () => setCurrentPage(prev => prev - 1)

return <div className={'page'}>
        <h1 className={'header'}>Список стран:</h1>
    <Countries countries={currentCountry}/>
    <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
   />
    <button className='btn' onClick={prevPage}>Prev</button>
    <button className='btn' onClick={nextPage}>Next</button>

   </div>
}

export default VideoPage;
