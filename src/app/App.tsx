import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { MapSwitcher } from "../Components/navigation/map_switcher";
import { api } from "../Utils/api_interface";
const all_conts = api.get_all_continents();
const conts = all_conts.map((cont) => ({ details: cont, view_url: "ayaya" }));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* put your tests here */}
      <div id="testing-code-goes-here">
        <MapSwitcher continents={conts} />
      </div>
    </div>
  );
}

export default App;
