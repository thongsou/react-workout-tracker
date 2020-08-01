import React from "react";
import "./App.css";
import Workout from "./components/workout";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="App">
      <Workout />
    </div>
  );
}

export default App;
