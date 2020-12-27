import React from "react";
import {
  MapSwitcher,
  MapSwitcherProps,
} from "../Components/navigation/map_switcher";

import { api } from "../Utils/api_interface";
const conts = api.get_all_continents();
const continents = conts.reduce(
  (acc: MapSwitcherProps["continents"], cont) => [
    ...acc,
    { details: cont, view_url: "foo" },
  ],
  []
);

function App() {
  return (
    <div>
      {/* put your tests here */}
      <div id="testing-code-goes-here">
        <MapSwitcher continents={continents} />
      </div>
    </div>
  );
}

export default App;
