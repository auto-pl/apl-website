import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Switcher, SwitcherProps } from "./switcher";

const meta: Meta = {
  title: "Switcher",
  component: Switcher,
};

export default meta;

const Template: Story<SwitcherProps> = (args) => <Switcher {...args} />;
export const Default = Template.bind({});
Default.args = {
  items: [
    { name: "Item 1", body: <span>Item 1</span> },
    { name: "Item 2", body: <span>Item 2</span> },
    { name: "Item 3", body: <span>Item 3</span> },
  ],
};
