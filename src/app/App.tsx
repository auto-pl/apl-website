import React from "react";
import "./App.css";
import "../styles/hex/hex.css";

import { Hex } from "../Components/map/hex";
import { HoverMenu } from "../Components/menus/hover_menu";
import { api } from "../Utils/api_interface";
const all_conts = api.get_all_continents();
let base = all_conts[0].base_states[0];

function App() {
  const [rerender, set_rerender] = React.useState(0);
  const force_rerender = () => set_rerender(rerender + 1);
  const [hovered, set_hover] = React.useState(false);
  const [i, set_i] = React.useState(0);
  const classes = [
    "LowPriorityHex",
    "MedPriorityHex",
    "HighPriorityHex",
    "ExtremePriorityHex",
  ];
  const increment_class = () => set_i(i + 1);
  const decrement_class = () => set_i(i - 1);
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
      <button
        onClick={() => {
          base = { ...base, priority_level: base.priority_level + 25 };
          force_rerender();
        }}
      >
        Increment priority by 25
      </button>
      <span className={classes[i]} id="styletest">
        Foobar
      </span>
      <button onClick={increment_class}>Increment style</button>
      <button onClick={decrement_class}>Decrement style</button>
    </div>
  );
}

export default App;
