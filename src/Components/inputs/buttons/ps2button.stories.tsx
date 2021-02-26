import React, { MouseEvent } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PS2Button, PS2ButtonProps, NotchLocation } from "./ps2button";

export default {
  title: "PS2Button",
  component: PS2Button,
} as Meta;

const Template: Story<PS2ButtonProps> = ({ children, ...args }) => (
  <PS2Button {...args}>{children}</PS2Button>
);

export const Example = Template.bind({});
const ayaya_add = (e: MouseEvent) => {
  const ele = document.querySelector("#ayaya-content");
  if (!ele) return;
  ele.innerHTML = ele.innerHTML + " ayaya";
  console.log((e?.target as HTMLButtonElement).value);
};

Example.args = {
  value: "I am a teapot, short and stout",
  children: <span id="ayaya-content"> </span>,
  onClick: ayaya_add,
  tooltip_text:
    "This button will add an 'ayaya' to the child element each time it is clicked. Also logs the value of the button.",
  deactivated: false,
  notch_location: NotchLocation.TOP_LEFT,
  id: "button-hehe",
};
