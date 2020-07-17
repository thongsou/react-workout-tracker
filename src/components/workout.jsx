import React, { Component } from "react";
import Exercise from "./exercise";

class Workout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: [],
      name: "",
      sets: "",
      reps: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSetsChange = (event) => {
    this.setState({ sets: event.target.value });
  };

  handleRepsChange = (event) => {
    this.setState({ reps: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.name}
          onChange={this.handleNameChange}
          placeholder={"Name of Exercise"}
        ></input>
        <input
          type="number"
          value={this.sets}
          onChange={this.handleSetsChange}
          placeholder={"Number of Sets"}
        ></input>
        <input
          type="number"
          value={this.reps}
          onChange={this.handleRepsChange}
          placeholder={"Number of Reps"}
        ></input>
        <Exercise />
      </div>
    );
  }
}

export default Workout;
