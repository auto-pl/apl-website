import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { SwitcherItem, SwitcherItemProps } from "./switcher_item";

const meta: Meta = {
  title: "Switchers/Base Switcher/SwitcherItem",
  component: SwitcherItem,
};

export default meta;

const Template: Story<SwitcherItemProps> = (args) => <SwitcherItem {...args} />;
export const Default = Template.bind({});
const cheese_icon_link =
  "https://b.thumbs.redditmedia.com/bZedgr0gq7RQBBnVYVc-Nmzdr-5vEUg4Dj8nTrMb7yA.png";
const apple_icon_link =
  "https://icons.iconarchive.com/icons/google/noto-emoji-food-drink/256/32349-red-apple-icon.png";
Default.args = {
  name: "I am the text",
  body: (
    <span style={{ display: "inline-block" }}>
      <img src={cheese_icon_link} height="16px" width="16px" alt="Cheese" />
      <img src={apple_icon_link} height="16px" width="16px" alt="apple" />
      Cheese + apple = chapple
    </span>
  ),
};
