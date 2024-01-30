import React from "react";
import "./App.css";
import Countdown from "./Countdown";
import mexicoImage from "./mexico.jpg"; // Make sure this path is correct

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Countdown to Mexico!</h1>
        <Countdown />
        <img
          src={mexicoImage}
          alt="Scenic view in Mexico"
          className="Mexico-image"
        />

        {/* You can add more components or content here if you want */}
      </header>
    </div>
  );
}

export default App;
