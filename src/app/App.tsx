import React from "react";
import Tooltip from "react-tooltip-lite";
import {
  PS2Button,
  PS2ToggleButton,
} from "../Components/inputs/buttons/ps2button";

import { api } from "../Utils/api_interface";
const conts = api.get_all_continents();

function App() {
  // Set the title after the component is mounted
  React.useEffect(() => {
    document.title = "AutoPL";
  });

  return (
    <div>
      {/* put your tests here */}
      <div id="testing-code-goes-here">
        {/*
          <Map continents={conts} view_urls={["", "", "", ""]} />
        */}
        <PS2Button
          text="test"
          on_click={() => console.log("Clicked")}
          tooltip_text="Hovered"
          value="yes"
        />
        <PS2Button />
        <PS2ToggleButton
          text="toggle test"
          on_click={() => console.log("toggle clicked")}
          on_value="v"
          off_value="5"
        />
        <Tooltip tagName="button" content={<div>Join MUMS</div>}>
          <button>Join MUMS</button>
        </Tooltip>
        <Tooltip
          content={
            <div>
              <h4 className="tip-heading">
                An unordered list to demo some html content
              </h4>
              <ul className="tip-list">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
                <li>Five</li>
              </ul>
            </div>
          }
          tagName="span"
        >
          Target content for big html tip
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
