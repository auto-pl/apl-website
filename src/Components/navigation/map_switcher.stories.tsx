import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { MapSwitcher, MapSwitcherProps } from "./map_switcher";
import { to_continent_view } from "../../interfaces/continent";
import { api } from "../../Utils/api_interface";

const meta: Meta = {
  title: "Switchers/MapSwitcher",
  component: MapSwitcher,
};

export default meta;

const Template: Story<MapSwitcherProps> = (args) => <MapSwitcher {...args} />;
export const Default = Template.bind({});
Default.args = {
  continent_views: to_continent_view(api.get_all_continents(), [
    "foo",
    "bar",
    "baz",
    "boo",
  ]),
};
