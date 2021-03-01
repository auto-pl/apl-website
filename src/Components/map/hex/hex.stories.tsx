import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Hex, HexProps } from "./hex";
import { api } from "../../../Utils/api_interface";

/*
const meta: Meta = {
  title: "Hexes/Hex",
  component: Hex,
};

const Template: Story<HexProps> = (args) => <Hex {...args} />;
export const DefaultHex = Template.bind({});
api
  .get_all_continents()[0]
  .base_states()
  .then((bases) => (DefaultHex.args = { base_state: bases[0] }));
*/
