import React from 'react'

const DogCard = (props) => {
  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <div className="card-image small">
            <img alt={props.dog.name} src={props.dog.img_url} />
            <span className="card-title">{props.dog.name}</span>
            <a onClick={()=> {props.handleClick(props.dog)}} className="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">好</i></a>
            </div>
            <h4>{props.dog.breed}</h4>
            <div className="card-action">
              <span> {props.dog.likes} likes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DogCard
