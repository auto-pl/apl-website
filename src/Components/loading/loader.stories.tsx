import React from "react";
import { PS2Loader, PS2LoaderProps } from "../loading/loader";
import { Meta, Story } from "@storybook/react/types-6-0";

const meta: Meta = {
  title: "PS2 Loader",
  component: PS2Loader,
  argTypes: {
    loading: {
      description: "Whether the loading animation should still play",
      control: { type: "boolean" },
    },
    size: {
      description: "How big the icon is",
      table: {
        defaultValue: { summary: 15 },
      },
      control: {
        type: "range",
        min: 1,
      },
    },
    style: {
      description:
        "The inline CSS for loader. This will be applied to the container of the loader, not the loader itself.",
      table: {
        defaultValue: { summary: "{}" },
      },
      control: "object",
    },
    class_name: {
      description: "A CSS class name to apply to the container.",
      table: { defaultValue: { summary: "''" } },
    },
    center: {
      description: "Whether to center the loader within its parent container",
      control: "boolean",
    },
  },
};

export default meta;

const Template: Story<PS2LoaderProps> = (args) => <PS2Loader {...args} />;
const default_args = { loading: true };
export const Default = Template.bind({});
Default.args = default_args;
