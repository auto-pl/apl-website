import React, { MouseEvent } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PS2Button, PS2ButtonProps, ButtonType } from "./ps2button";

export default {
  title: "PS2Button",
  component: PS2Button,
  argTypes: {
    children: {
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: "ReactNode | undefined" },
      },
      control: "none",
    },
    tooltip_text: {
      table: {
        defaultValue: { summary: "undefined" },
      },
    },
  },
} as Meta;

const Template: Story<PS2ButtonProps> = ({ children, ...args }) => (
  <PS2Button {...args}>{children}</PS2Button>
);

export const CornerNotch = Template.bind({});
const ayaya_add = (e: MouseEvent) => {
  const ele = document.querySelector("#ayaya-content");
  if (!ele) return;
  ele.innerHTML = ele.innerHTML + " ayaya";
  console.log((e?.target as HTMLButtonElement).value);
};

CornerNotch.args = {
  children: <span id="ayaya-content"> </span>,
  tooltip_text:
    "This button will add an 'ayaya' to the child element each time it is clicked. Also logs the value of the button.",
  notch_location: ButtonType.NOTCHED_CORNERS,
  onClick: ayaya_add,
  id: "button-hehe",
  value: "I am a teapot, short and stout",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "I am disabled",
  tooltip_text:
    "This button is disabled and cannot be clicked. Even its `onClick` will not fire",
  notch_location: ButtonType.NOTCHED_CORNERS,
  onClick: () => console.log("I am not disabled :)"),
  disabled: true,
};

export const LeftNotch = Template.bind({});
LeftNotch.args = {
  children: "I have a notch on the left",
  tooltip_text: "There is nothing special here. Just a different style.",
  notch_location: ButtonType.NOTCHED_TOP_LEFT,
};

export const NoNotch = Template.bind({});
NoNotch.args = {
  children: "I have no notch",
  tooltip_text: "There is nothing special here. Just a different style.",
  notch_location: ButtonType.NO_NOTCH,
};

export const NoSides = Template.bind({});
NoSides.args = {
  children: "I have no notch and no sides",
  tooltip_text: "There is nothing special here. Just a different style.",
  notch_location: ButtonType.NO_SIDES,
};
