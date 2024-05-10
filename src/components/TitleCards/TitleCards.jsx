import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = () => {

  const cardsRef = useRef();

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  function handleWheel(e){
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY
  }

  return (
    <div className='titlecards'>
      <h2>Popluar on Netflix</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card,index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt=""></img>
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
