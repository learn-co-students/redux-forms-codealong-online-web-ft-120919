import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {
  constructor() {
    super()
    this.state = {text: ''}
  }

  handleOnChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch({type: 'ADD_TODO', payload: this.state})
  }

  render() {
    return(
      <div>
        Create Todo Component
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add Todo</label> <br></br>
            <input type="text" onChange={this.handleOnChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {addTodo: formData => dispatch({type: 'ADD_TODO', payload: formData})}

export default connect()(CreateTodo);
