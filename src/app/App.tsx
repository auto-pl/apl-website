import React from "react";
import "../styles/global/ps2_styles/text.css";
import "../styles/global/ps2_styles/background.css";
import "../styles/global/ps2_styles/containers.css";

import { TextContainer } from "../Components/containers/text_container";
import "../styles/global/ps2_styles/positioning.css";

import { api } from "../Utils/api_interface";
const conts = api.get_all_continents();

function App() {
  return (
    <div className="background wrapper">
      {/* put your tests here */}
      <div className="left" id="testing-code-goes-here">
        <TextContainer
          width={20}
          header_settings={{ text: "The best outfit ever" }}
        >
          Join MUMS on Cobalt VS. It is the greatest outfit to have ever graced
          Cobaltium.
        </TextContainer>
      </div>
    </div>
  );
}

export default App;
