import React from 'react';
import logo from './logo.svg';
import './App.css';
import DogContainer from './DogContainer'
import DogFilter from './DogFilter'
import NameSort from './NameSort'
import LikeSort from './LikeSort'
import NewDogForm from './NewDogForm'

class App extends React.Component {
  state = {
    dogs: [],
    displayDogs: [],
  }

  componentDidMount() {
    fetch("http://localhost:3000/dogs")
    .then(response => response.json())
    .then(dogData => {
      this.setState({
        dogs: dogData,
        displayDogs: dogData
      })
    })
  }

  handleChange = (event) => {
    let newArray = this.state.dogs.filter(dog => {
      return dog.breed.toLowerCase().includes(event.target.value.toLowerCase()) || dog.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({
      displayDogs: newArray
    })
  }

  handleNameSort = () => {
    let x = this.state.displayDogs.sort(function (a,b) {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
      })
    this.setState({
      displayDogs: x
    })
  }

  handleLikeSort= () => {
    let y = this.state.displayDogs.sort(function (a,b) {
      return a.likes - b.likes
    })
    y.reverse()
    this.setState({
      displayDogs: y
    })
  }

  handleClick = (likedDog) => {
    let newArray = this.state.dogs.map(dog => {
      if (dog.id === likedDog.id) {
        return {...dog, likes: dog.likes+1}
      } else {
      return dog
        }
    })

      this.setState({
        dogs: newArray
      })

      fetch(`http://localhost:3000/dogs/${likedDog.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          likes: ++likedDog.likes
        })
      })
  }

  handleNewSubmit = (event) => {
    event.preventDefault()
    let newDog= {
      name: event.target.name.value,
      breed: event.target.breed.value,
      img_url: event.target.imgUrl.value,
      likes: 0
    }
    let newArray= Array.from(this.state.displayDogs)
    newArray.unshift(newDog)
    this.setState({
      displayDogs: newArray
    })
    fetch("http://localhost:3000/dogs", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newDog)
    })
  }

  render() {
  return (
    <div className="App deep-orange lighten-5">
      <h1>DOGSTAGRAM</h1>
      <DogFilter handleChange={this.handleChange}/>
      <NameSort handleNameSort={this.handleNameSort}/>
      <LikeSort handleLikeSort={this.handleLikeSort} />
      <NewDogForm handleNewSubmit={this.handleNewSubmit}/>
      <DogContainer handleClick={this.handleClick} dogs={this.state.displayDogs}/>
    </div>
  );
}
}

export default App;
