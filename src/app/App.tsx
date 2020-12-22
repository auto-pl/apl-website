import React from "react";
import { Continent } from "../Components/map/continent";

import { api } from "../Utils/api_interface";
const cont = api.get_all_continents()[0];

function App() {
  return (
    <div>
      {/* put your tests here */}
      <div id="testing-code-goes-here">
        <Continent {...cont} />
      </div>
    </div>
  );
}

export default App;
