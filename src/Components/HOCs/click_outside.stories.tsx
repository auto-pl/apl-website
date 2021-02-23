import React, { FC } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  withClickOutsideDetection,
  WithClickOutsideDetectionProps,
} from "./click_outside";

const meta: Meta = {
  title: "withClickOutsideDetection",
};
export default meta;

interface ExampleProps {
  clicked_out: boolean;
}

const ExampleComponent: FC<ExampleProps> = ({ clicked_out = true }) => {
  return <span>{clicked_out ? "Clicked out" : "clicked in"}</span>;
};

const WrappedExample = withClickOutsideDetection(ExampleComponent);

const Template: Story<WithClickOutsideDetectionProps> = (args) => (
  <Switcher {...args} />
);
export const Default = Template.bind({});
Default.args = {
  items: [
    { text: "Item 1", body: <span>Item 1</span> },
    { text: "Item 2", body: <span>Item 2</span> },
    { text: "Item 3", body: <span>Item 3</span> },
  ],
};
