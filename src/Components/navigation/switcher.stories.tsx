import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Switcher, SwitcherProps } from "./switcher";

const meta: Meta = {
  title: "Switcher",
  component: Switcher,
  argTypes: {
    items: {
      description: "The elements contained within the switcher",
      table: {
        type: {
          summary: "{text: string, body: ReactNode}",
          detail:
            "text: the text on the item. This will be used as the switcher header when selected.\n\nbody: The element to display inside the switcher. ",
        },
      },
      control: "object",
    },
    header_text: {
      control: "text",
    },
  },
};

export default meta;

const Template: Story<SwitcherProps> = (args) => <Switcher {...args} />;
export const Default = Template.bind({});
Default.args = {
  items: [
    { text: "Item 1", body: <span>Item 1</span> },
    { text: "Item 2", body: <span>Item 2</span> },
    { text: "Item 3", body: <span>Item 3</span> },
  ],
};
