import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import info_icon from '../../assets/info_icon.png'
import play_icon from '../../assets/play_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards.jsx'

const Home = () => {

  const renders = useRef(1);
  //const [renders2 , setRenders2] = useState(1)
  const [name , setName] = useState("")

  useEffect(() => {
    console.log("rendered")
    // setRenders2(current => current + 1);
    renders.current += 1;
  })

  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={hero_banner} className='banner-img'></img>
        <div className="hero-caption">
          <img src={hero_title} alt='' className='caption-img'></img>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest
            to save the city from an immortal enemy
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon}></img>Play</button>
            <button className='btn dark-btn'><img src={info_icon}></img>More info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards />
        <TitleCards />
        <TitleCards />
        <TitleCards />
      </div>

      {/* useRef example */}
      <div className='input'>
        <input value={name} onChange={e => setName(e.target.value)}></input>
        <p>No. of renders = {renders.current}</p>
      </div>
    </div>
    // useRef example
  )
}

export default Home