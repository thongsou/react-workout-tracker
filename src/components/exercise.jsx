import React, { Component } from "react";

class Exercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      sets: "",
      reps: "",
      rpe: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <div>
          <label>Name of Exercise</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>
      </form>
    );
  }
}

export default Exercise;
