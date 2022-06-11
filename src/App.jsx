import React, {useEffect, useState} from 'react';
import './style.scss'
import MusicaContainer from "./components/musica-container/MusicaContainer";
import Header from "./components/Header/Header";

const App = () => {
  const [basket, setBasket] = useState(() => {
    const saved = localStorage.getItem('basket')
    const initialValue = JSON.parse(saved)
    return initialValue || []
  })
  const [stars, setStars] = useState(() => {
    const saved = localStorage.getItem('stars')
    const initialValue = JSON.parse(saved)
    return initialValue || []
  })

  useEffect(() => {
      localStorage.setItem('basket', JSON.stringify(basket))
      localStorage.setItem('stars', JSON.stringify(stars))
  },[basket, stars])

  const addToBasket = (item) => {
    let isInArray = false
    basket.map(el => {
      if (el.id === item.id) {
        isInArray = true
      }
    })
    if (!isInArray)
      setBasket([...basket, item])
  }

  const addToStars = (event) => {
    const favorites = event.target.dataset.id
    const allFavorite = [...stars, favorites]
    const filteredFavorite = stars.filter(el => el !== favorites)

    if (stars.includes(favorites)) {
      setStars(filteredFavorite)
    } else {
      setStars(allFavorite)
    }
  }

  return (
    <>
      <header className="header">
        <Header orders={basket} stars={stars}/>
      </header>
      <section className="store-items">
        <MusicaContainer title="LATEST ARRIVALS IN MUSICA" onAdd={addToBasket} addFav={addToStars} stars={stars}/>
      </section>
    </>
  )
}

export default App;
