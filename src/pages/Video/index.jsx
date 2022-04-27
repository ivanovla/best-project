import React, { useEffect, useState } from 'react';
import './index.css';

const VideoPage = () => {

const [films, setFilms] = useState([])

useEffect(() => {
    fetch('https://swapi.dev/api/films')
        .then((response) => response.json())
        .then((films) => setFilms(films.results));

}, []);

return <div className={'page'}>
        <h1 className={'header'}>Список фильмов:</h1>
   {
   films.map(film => <ul><li>{film.title}</li></ul>)
   }
   </div>
}

export default VideoPage;
