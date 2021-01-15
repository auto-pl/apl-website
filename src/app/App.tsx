import React from "react";
import {
  PS2Button,
  PS2ToggleButton,
} from "../Components/inputs/buttons/ps2button";
import "../styles/global/ps2_styles/text.css";
import "../styles/global/ps2_styles/background.css";
import "../styles/global/ps2_styles/containers.css";

import { TextContainer } from "../Components/containers/text_container";
import "../styles/global/ps2_styles/positioning.css";

import { api } from "../Utils/api_interface";
const conts = api.get_all_continents();

function App() {
  // Set the title after the component is mounted
  React.useEffect(() => {
    document.title = "AutoPL";
  });

  return (
    <div className="background wrapper">
      {/* put your tests here */}
      <div className="left" id="testing-code-goes-here">
        <TextContainer
          width={30}
          header_settings={{ text: "The Best Outfit Ever" }}
          on_click={() => console.log("yes")}
        >
          Join MUMS on Cobalt VS. It is the greatest outfit to have ever graced
          Cobaltium.
        </TextContainer>
      </div>
    </div>
  );
}

export default App;
