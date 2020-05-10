import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
  state = {
    text: "",
  };
  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }
  handleSubmit (e){
    e.preventDefault()
    this.props.addTodo(this.state)
  }
  render() {
    return (
      <div>
        <form className="center" onSubmit={(e)=>{this.handleSubmit(e)}}>
          <p>
            <label>Add to do</label>
            <br />
            <input
              value={this.state.text}
              type="text"
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
          </p>
          <input type="submit" />
        </form>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
const mapDispatchToprops = (dispatch) => {
  return {
    addTodo: (formData) => {
      dispatch({ type: "ADD_TODO", payload: formData });
    },
  };
};

export default connect(null, mapDispatchToprops)(CreateTodo);
