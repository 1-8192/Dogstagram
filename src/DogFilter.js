import React from 'react'

class DogFilter extends React.Component {
  render(){
    return (
      <div>
      <input type="text" placeholder={"Search by dawgs"} onChange={this.props.handleChange}/>
      </div>
    )
  }
}

export default DogFilter
