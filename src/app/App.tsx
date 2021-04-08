import React from "react";
import "../styles/global/ps2_styles/text.css";
import "../styles/global/ps2_styles/background.css";
import "../styles/global/ps2_styles/positioning.css";

import { Map } from "../Components/map/map";

import { api } from "../Utils/api_interface";
const conts = api.get_all_continents();

function App() {
  // Set the title after the component is mounted
  React.useEffect(() => {
    document.title = "AutoPL";
  });

  return (
    <div className="background wrapper main-body">
      <div id="portals"></div>
      {/* put your tests here */}
      <div id="testing-code-goes-here">
        <Map continents={conts} />
      </div>
    </div>
  );
}

export default App;
