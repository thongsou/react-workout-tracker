import React, { Component } from "react";

class Weights extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: "",
    };
  }

  handleWeightsChange = (event) => {
    this.setState({ count: event.target.value });
  };

  render() {
    return (
      <input
        type="number"
        value={this.count}
        onChange={this.handleWeightsChange}
        placeholder={"0"}
      ></input>
    );
  }
}

export default Weights;
