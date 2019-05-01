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
        <div className="row">
        <form className="col s-12" onSubmit={this.handleNewSubmitLocally}>
          <div className="row">
            <div className="input field col s-12">
              <input onChange={this.handleFormChange} type="text" name="name" value={this.state.name} placeholder="Dawg Name"/>
              <label>NAME</label>
            </div>
          </div>
          <div className="row">
            <div className="input field col s-12">
              <input onChange={this.handleFormChange} type="text" name="breed" value={this.state.breed} placeholder="Breed"/>
              <label>BREED</label>
            </div>
          </div>
          <div className="row">
            <div className="input field col s-12">
              <input onChange={this.handleFormChange} type="text" name="imgUrl" value={this.state.imgUrl} placeholder="gif url"/>
              <label>IMAGE URL</label>
            </div>
          </div>
          <input className="waves-effect green lighten-4 btn" type="Submit" value="submit"/>
        </form>
      </div>
      )
    }
  }

  render() {
    return (
      <div>
        <button className="waves-effect green lighten-4 btn" onClick={this.revealClick}>Add a dawg!</button>
        {this.form()}
      </div>
    )
  }
}

export default NewDogForm
