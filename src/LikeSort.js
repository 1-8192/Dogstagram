import React from 'react'

const LikeSort = (props) => {
  return (
      <button className="waves-effect waves-light btn" onClick={props.handleLikeSort}>Sort by popularity!</button>
  )
}

export default LikeSort
