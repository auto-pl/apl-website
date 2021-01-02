import React from "react";
import { Button, ToggleButton } from "../Components/inputs/buttons/ps2button";

import { api } from "../Utils/api_interface";
const conts = api.get_all_continents();

function App() {
  return (
    <div>
      {/* put your tests here */}
      <div id="testing-code-goes-here">
        {/*
          <Map continents={conts} view_urls={["", "", "", ""]} />
        */}
        <Button
          text="test"
          on_click={() => console.log("Clicked")}
          tooltip_text="Hovered"
          value="yes"
        />
        <Button />
        <ToggleButton
          text="toggle test"
          on_click={() => console.log("toggle clicked")}
          on_value="v"
          off_value="5"
        />
      </div>
    </div>
  );
}

export default App;
