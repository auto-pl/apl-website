import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { SwitcherItem, SwitcherItemProps } from "./switcher_item";

const meta: Meta = {
  title: "Switchers/Base Switcher/SwitcherItem",
  component: SwitcherItem,
  argTypes: {
    header: {
      control: "boolean",
    },
    disabled: { control: "boolean" },
  },
};

export default meta;

const Template: Story<SwitcherItemProps> = (args) => <SwitcherItem {...args} />;
export const TextOnly = Template.bind({});
TextOnly.args = {
  name: "UmU",
  index: 4,
  body: <span>I will log my `name` and `index`</span>,
  on_select: (name, index) => {
    console.log(`Name: ${name}, Index: ${index}`);
  },
};

export const WithCustomElements = Template.bind({});
const cheese_icon_link =
  "https://b.thumbs.redditmedia.com/bZedgr0gq7RQBBnVYVc-Nmzdr-5vEUg4Dj8nTrMb7yA.png";
const cheese_img = (
  <img src={cheese_icon_link} height="16px" width="16px" alt="Cheese" />
);
const apple_icon_link =
  "https://icons.iconarchive.com/icons/google/noto-emoji-food-drink/256/32349-red-apple-icon.png";
const apple_img = (
  <img src={apple_icon_link} height="16px" width="16px" alt="apple" />
);
WithCustomElements.args = {
  name: "I am the text",
  body: (
    <span style={{ display: "inline-block" }}>
      {cheese_img} Cheese + {apple_img} apple = chapple
    </span>
  ),
};
