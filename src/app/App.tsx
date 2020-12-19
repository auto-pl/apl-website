import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Hex } from "../Components/map/hex";
import { HoverMenu } from "../Components/menus/hover_menu";
import { api } from "../Utils/api_interface";
const all_conts = api.get_all_continents();
const base = all_conts[0].base_states[0];

function App() {
  const [hovered, set_hover] = React.useState(false);
  return (
    <div className="App">
      {/* put your tests here */}
      <div id="testing-code-goes-here">
        <Hex
          out_of_bounds={false}
          base_id="test"
          show_hover_menu={() => set_hover(!hovered)}
          base_state={base}
        />
        {hovered ? (
          <HoverMenu
            title="foo"
            body_items={[<span>Body</span>]}
            options={{ fixed_position: "bottom right" }}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
