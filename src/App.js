import React, { useState } from "react";
import "./App.css";
import Workout from "./components/workout";
import Modal from "react-modal";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="App">
      <h1 style={{ textAlign: "left" }}>Tony's Workout Tracker</h1>
      <button
        onClick={() => setModalIsOpen(true)}
        style={{ marginLeft: "auto" }}
      >
        <h3>Add an Exercise +</h3>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
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
        <Workout />
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
