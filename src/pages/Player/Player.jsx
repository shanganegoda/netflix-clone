import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const navigate = useNavigate();
  const { id } = useParams()

  const [apiData , setApiData] = useState({
    name : "",
    key : "",
    published_at : "",
    type : ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGMwYjk3MTgxODQxMzU3YjViZjA0MTk0NmJiMTUwZSIsInN1YiI6IjY2NDBhYjM0OTM2OWJiNmU2NTIwN2ZkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U7TVDYmrCgPA0TjoreX4DdxGee7rELnBf5DaTpF6Bvo'
    }
  };
  
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => {
      setApiData(response.results[0])
      console.log(apiData)
    })
    .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt=""onClick={() => navigate('/')}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder={0} allowFullScreen></iframe>
      <div className="player-info">
        <p>Published Date : {apiData.published_at.slice(0,10)}</p>
        <p>Name : {apiData.name}</p>
        <p>Type : {apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
