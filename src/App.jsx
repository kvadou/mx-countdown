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
        <br /> {/* Line break added here */}
        <ul>
          {" "}
          {/* Wrap your list items in a <ul> for proper HTML structure */}
          <li>
            <a
              className="LeftAlignText" // Apply the class here
              href="https://maps.app.goo.gl/cH6BDzc3LUypkvL89"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sunday 4th: El carbon 6 pm Conf. ds0402-1 - walkable from the
              hotel
            </a>
          </li>{" "}
          <li>
            <a
              className="LeftAlignText" // Apply the class here
              href="https://maps.app.goo.gl/GV4MQBg2zgYxfk8e7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Monday 5th: Mi casa restaurante 5:30 pm Conf. LF13
            </a>
          </li>{" "}
          <li>
            <a
              className="LeftAlignText" // Apply the class here
              href="https://maps.app.goo.gl/qy7Ec4ke6fKBVaMe6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tuesday 6 th Salvatore's at 5 pm confirmed
            </a>
          </li>{" "}
          <li>
            <a
              className="LeftAlignText" // Apply the class here
              href="https://maps.app.goo.gl/BQfwcfgyLXfjxZhU9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wednesday 7th: open (Señor Frogs?)
            </a>
          </li>{" "}
          <li>
            <a
              className="LeftAlignText" // Apply the class here
              href="https://maps.app.goo.gl/qt7S2StGPan6aqLE6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thursday 8th: The office at 5:30 pm - Fiesta at 6:30{" "}
            </a>
          </li>{" "}
          <li>
            <a
              className="LeftAlignText" // Apply the class here
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Thursday 9th: Open{" "}
            </a>
          </li>{" "}
        </ul>
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
