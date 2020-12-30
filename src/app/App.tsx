import React from "react";
import { Map } from "../Components/map/map";

import { api } from "../Utils/api_interface";
const conts = api.get_all_continents();

function App() {
  return (
    <div>
      {/* put your tests here */}
      <div id="testing-code-goes-here">
        <Map continents={conts} view_urls={["", "", "", ""]} />
      </div>
    </div>
  );
}

export default App;
