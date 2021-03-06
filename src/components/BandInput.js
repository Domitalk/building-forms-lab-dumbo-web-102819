// Add BandInput component
import React, { Component } from 'react'; 

class BandInput extends Component {
  state ={
    name: ''
  }
  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault() 
    console.log(this.state)
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.name} onChange={this.handleChange} type="text"/> 
          <input type="submit" /> 
        </form>

      </div>
    )
  }
}

export default BandInput
