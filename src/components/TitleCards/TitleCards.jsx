import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import {useNavigate} from 'react-router-dom'

const TitleCards = ({title="Popular on Netflix",category="upcoming"}) => {

  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGMwYjk3MTgxODQxMzU3YjViZjA0MTk0NmJiMTUwZSIsInN1YiI6IjY2NDBhYjM0OTM2OWJiNmU2NTIwN2ZkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U7TVDYmrCgPA0TjoreX4DdxGee7rELnBf5DaTpF6Bvo'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .then(console.log(apiData))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])


  function handleWheel(e) {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY
  }

  return (
    <div className='titlecards'>
      <h2>{title}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <div className="card" key={index} onClick={() => navigate(`/player/${card.id}`)}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="sdssd"></img>
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
