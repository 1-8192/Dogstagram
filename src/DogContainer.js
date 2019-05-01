import React from 'react'
import DogCard from './DogCard'

const DogContainer =(props) => {
    return (
      <div className="green lighten-4">
        <h2 className="fun-font">THE DAWGS!</h2>
        {props.dogs.map(singleDog => {return <DogCard handleDelete={props.handleDelete} handleLikeClick={props.handleLikeClick} dog={singleDog} />})}
      </div>
    )
  }

export default DogContainer
