import React from 'react'

class NewDogForm extends React.Component {
  state = {
    name: "",
    breed: "",
    imgUrl: "",
    hidden: true
  }

  revealClick = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  handleFormChange = (event) => {
    let x = event.target.name
    this.setState({
    [x]: event.target.value
    })
  }

  handleNewSubmitLocally = (event) => {
    this.setState({
      name: "",
      breed: "",
      imgUrl: "",
      hidden: !this.state.hidden
    })
    this.props.handleNewSubmit(event)
  }

  form = () => {
    if (this.state.hidden === true) {
      return null
    } else {
      return (
        <form onSubmit={this.handleNewSubmitLocally}>
          <input onChange={this.handleFormChange} type="text" name="name" value={this.state.name} placeholder="Dawg Name"/>
          <input onChange={this.handleFormChange} type="text" name="breed" value={this.state.breed} placeholder="Breed"/>
          <input onChange={this.handleFormChange} type="text" name="imgUrl" value={this.state.img_url} placeholder="gif url"/>
          <input type="Submit" value="submit"/>
        </form>
      )
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.revealClick}>Add a dawg!</button>
        {this.form()}
      </div>
    )
  }
}

export default NewDogForm
