import React from 'react';
import './style.scss'
import MusicaContainer from "./components/musica-container/MusicaContainer";
import Header from "./components/Header/Header";

class App extends React.Component {
  state = {
    basket: [],
    stars: [],
  }

  componentDidMount() {
    let state = JSON.parse(localStorage.getItem('state'));
    this.setState(state);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.setStateToLocalStorage(this.state, prevState)) {
      localStorage.setItem('state', JSON.stringify(this.state));
    }
  }

  setStateToLocalStorage = (a,b) => {
    return JSON.stringify(a) !== JSON.stringify(b);
  }


  addToBasket = (item) => {
    let isInArray = false
    console.log(item)
    this.state.basket.map(el => {
      if (el.id === item.id) {
        isInArray = true
      }
    })
    if (!isInArray)
      this.setState({ basket: [...this.state.basket, item] })
  }

  addToStars = (event) => {
    const favorites = event.target.dataset.id
    const allFavorite = [...this.state.stars, favorites]
    const filteredFavorite = this.state.stars.filter(el => el !== favorites)

    if (this.state.stars.includes(favorites)) {
      this.setState({
        stars: filteredFavorite
      })
    } else {
      this.setState({
        stars: allFavorite
      })
    }
  }

  render(){
    const { stars } = this.state
    return (
      <>
      <header className="header">
        <Header handlerClick={this.showModal} orders={this.state.basket} stars={this.state.stars}/>
      </header>
        <section className="store-items">
          <MusicaContainer title="LATEST ARRIVALS IN MUSICA" onAdd={this.addToBasket} addFav={this.addToStars} stars={stars}/>
        </section>
      </>
    )
  }
}

export default App;
