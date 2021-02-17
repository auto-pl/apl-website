import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ServerSwitcher, ServerSwitcherProps } from "./server_switcher";
import { api } from "../../Utils/api_interface";

const meta: Meta = {
  title: "ServerSwitcher",
  component: ServerSwitcher,
};

export default meta;

const Template: Story<ServerSwitcherProps> = (args) => (
  <ServerSwitcher {...args} />
);
export const Default = Template.bind({});
Default.args = {
  servers: api.get_all_servers(),
};
