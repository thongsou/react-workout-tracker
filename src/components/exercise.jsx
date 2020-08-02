import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import Weights from "./weights";

class Exercise extends Component {
  renderSetsWithReps = () => {
    var arr = [];
    var numOfCols = this.props.sets;
    for (var i = 0; i < numOfCols; i++) {
      arr.push(this.props.reps);
    }

    return arr.map((col) => <td>{col}</td>);
  };

  renderWeights = () => {
    var arr = [];
    var numOfCols = this.props.sets;
    for (var i = 0; i < numOfCols; i++) {
      arr.push(<Weights />);
    }

    return arr.map((weight) => <td>{weight}</td>);
  };

  render() {
    return (
      <div>
        <ReactBootStrap.Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>
                <h1>{this.props.name}</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reps</td>
              {this.renderSetsWithReps()}
            </tr>
            <tr>
              <td>Weight</td>
              {this.renderWeights()}
            </tr>
          </tbody>
        </ReactBootStrap.Table>
      </div>
    );
  }
}

export default Exercise;
