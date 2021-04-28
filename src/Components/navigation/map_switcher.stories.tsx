import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { MapSwitcher, MapSwitcherProps } from "./map_switcher";
import { api } from "../../Utils/api_interface";

const meta: Meta = {
  title: "Switchers/MapSwitcher",
  component: MapSwitcher,
  argTypes: {
    set_new_continent: { action: "clicked", control: "none" },
  },
};

export default meta;

const Template: Story<MapSwitcherProps> = (args) => <MapSwitcher {...args} />;
export const Default = Template.bind({});
Default.args = {
  continents: api.get_all_continents(),
  set_new_continent: () => {},
};
