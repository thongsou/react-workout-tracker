import React, { Component } from "react";
import Exercise from "./exercise";
import Modal from "react-modal";

class Workout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: [],
      id: 0,
      name: "",
      sets: "",
      reps: "",
      displayModal: false,
    };
  }

  handleDelete = (name) => {
    let arr = this.state.exercises;
    arr = arr.filter((ex) => {
      return ex.name !== name;
    });
    this.setState({ exercises: arr });
  };

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
    this.setState({ id: this.state.id + 1 });
    let newArray = this.state.exercises;
    newArray.push({
      key: this.state.id,
      name: this.state.name,
      sets: this.state.sets,
      reps: this.state.reps,
    });
    this.setState({ exercises: newArray });
    this.setState({ displayModal: false });
  };

  render() {
    return (
      <div>
        <h1 style={({ textAlign: "left" }, { color: "orange" })}>
          Thongsou Yang's Workout Tracker
        </h1>
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
          <button onClick={this.handleEnter}>Enter</button>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
        {this.state.exercises.map((exercise) => (
          <section>
            <Exercise
              key={exercise.id}
              name={exercise.name}
              sets={exercise.sets}
              reps={exercise.reps}
            />
            <button onClick={() => this.handleDelete(exercise.name)}>
              Delete {exercise.name}
            </button>
          </section>
        ))}
      </div>
    );
  }
}

export default Workout;
