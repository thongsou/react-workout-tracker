import React, { Component } from "react";
import Exercise from "./exercise";
import Modal from "react-modal";

class WorkoutCopy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: [],
      name: "",
      sets: "",
      reps: "",
      displayModal: false,
    };
  }

  openModal = (e) => {
    this.setState({ displayModal: true });
  };

  closeModal = () => {
    this.setState({ displayModal: false });
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSetsChange = (event) => {
    this.setState({ sets: event.target.value });
  };

  handleRepsChange = (event) => {
    this.setState({ reps: event.target.value });
  };

  handleEnter = (event) => {
    let newArray = [];
    this.state.exercises.length === 0
      ? (newArray = [
          {
            exerciseName: this.state.name,
            sets: this.state.sets,
            reps: this.state.reps,
          },
        ])
      : (newArray = [
          ...this.state.exercises,
          {
            exerciseName: this.state.name,
            sets: this.state.sets,
            reps: this.state.reps,
          },
        ]);

    this.setState({ exercises: newArray });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "left" }}>Tony's Workout Tracker</h1>
        <button onClick={this.openModal} style={{ marginLeft: "auto" }}>
          <h3>Add an Exercise +</h3>
        </button>
        <Modal
          isOpen={this.state.displayModal}
          onRequestClose={this.closeModal}
          style={{
            overlay: {
              backgroundColor: "black",
            },
            content: {
              color: "orange",
            },
          }}
        >
          <h2>Enter the Details of Your Exercise</h2>
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
          <button onClick={this.handleEnter} className="btn btn-primary">
            Enter
          </button>
          <Exercise />
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    );
  }
}

export default WorkoutCopy;
