import React from 'react'
import DogCard from './DogCard'

const DogContainer =(props) => {
    return (
      <div className="green lighten-4">
        <h2>DAWGS!</h2>
        {props.dogs.map(singleDog => {return <DogCard handleLikeClick={props.handleLikeClick} dog={singleDog} />})}
      </div>
    )
  }

export default DogContainer
