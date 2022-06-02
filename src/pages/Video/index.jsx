import React, { useEffect, useState } from 'react';
import {inject, observer} from 'mobx-react';
// import {} from '@mui/material'
import Countries from './Countries';
import Pagination from './Pagination';
import './index.css';
import mainStore from "../../stores/mainStore";

const VideoPage = inject('mainStore')(observer((props) => {
const [countries, setCountries] = useState([])
const [currentPage, setCurrentPage] = useState(1)
const [countriesPerPage, setCountriesPerPage] = useState(10)

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

const countriesValue = (e) => setCountriesPerPage(e.target.value)

if (!countries.length) return <div className={'page'}>Loading...</div>

return <div className={'page'}>
    <button onClick={e => mainStore.setUser({age: parseInt(Math.random() * 100)})}>Click</button>
        <h1 className={'header'}>Список стран:</h1>
            <div><Countries countries={currentCountry}/>

                <Pagination
                    countriesPerPage={countriesPerPage}
                    totalCountries={countries.length}
                    paginate={paginate}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    currentPage={currentPage}
                    countriesValue={countriesValue}
                />

            </div>
        </div>
}))


export default VideoPage;
