import React from 'react'

const LikeSort = (props) => {
  return (
      <button className="waves-effect green lighten-4 btn fun-font" onClick={props.handleLikeSort}>Sort by popularity!</button>
  )
}

export default LikeSort
