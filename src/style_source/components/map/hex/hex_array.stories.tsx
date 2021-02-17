import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HexArray, HexArrayProps } from "./hex_array";
import { api } from "../../../../Utils/api_interface";

const meta: Meta = {
  title: "Hexes/HexArray",
  component: HexArray,
};

export default meta;

const Template: Story<HexArrayProps> = (args) => <HexArray {...args} />;
export const Default = Template.bind({});
api
  .get_all_continents()[0]
  .base_states()
  .then(
    (bases) =>
      (Default.args = {
        base_states: bases,
      })
  );
