import React from "react";
import { DropdownMenu } from "../Components/inputs/ps2dropdown";
import "../styles/global/ps2_styles/text.css";
import "../styles/global/ps2_styles/background.css";
import "../styles/global/ps2_styles/containers.css";
import Amerish from "./Resources/Images/Maps/Amerish/LOD0.png";

import { api } from "../Utils/api_interface";
const conts = api.get_all_continents();

function App() {
  return (
    <div className="background wrapper">
      {/* put your tests here */}
      <div className="container" id="testing-code-goes-here"></div>
    </div>
  );
}

export default App;
