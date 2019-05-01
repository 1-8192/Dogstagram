import React from 'react'

const DogCard = (props) => {
  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <div className="card-image small">
            <img alt={props.dog.name} src={props.dog.img_url} />
            <span className="card-title fun-font">{props.dog.name}</span>
            <a onClick={()=> {props.handleLikeClick(props.dog)}} className="btn-floating halfway-fab waves-effect waves-light red fun-font"><i class="material-icons">Like</i></a>
            </div>
            <h4 className="fun-font">{props.dog.breed}</h4>
            <div className="card-action">
              <span> {props.dog.likes} likes</span>
            </div>
            <div className="card-action">
              <button onClick={()=> {props.handleDelete(props.dog)}}className="waves-effect deep-orange lighten-5 btn green-text fun-font"> Take Yeller out back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DogCard
