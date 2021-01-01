import React from "react";
import { Map } from "../Components/map/map";
import { WithBaseHoverMenu } from "../Components/HOCs/hover";

import { api } from "../Utils/api_interface";
import { BaseState } from "../interfaces/continent";
const conts = api.get_all_continents();

const TestComponent = WithBaseHoverMenu((props: { base_state: BaseState }) => {
  return (
    <div>
      <span>Test</span>
    </div>
  );
});

function App() {
  return (
    <div>
      {/* put your tests here */}
      <div id="testing-code-goes-here">
        <TestComponent base_state={conts[0].base_states[0]} />
        {/*
          <Map continents={conts} view_urls={["", "", "", ""]} />
        */}
      </div>
    </div>
  );
}

export default App;
