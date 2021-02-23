import React, { FC, useState } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withClickOutsideDetection } from "./click_outside";

const meta: Meta = {
  title: "withClickOutsideDetection",
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
};
export default meta;

interface ExampleProps {
  clicked_out: boolean;
}

const ExampleComponent: FC<ExampleProps> = ({ clicked_out }) => {
  return (
    <div id="example" style={{ border: "1px solid black", width: "20%" }}>
      <span>{clicked_out ? "Clicked out" : "clicked in"}</span>
    </div>
  );
};

const WithDetection = () => {
  const [is_in, set_in] = useState(false);
  const handle_out = () => set_in(false);
  const handle_in = () => set_in(true);
  const [WrappedExample] = withClickOutsideDetection(
    ExampleComponent,
    "example",
    handle_out,
    handle_in
  );
  return <WrappedExample clicked_out={is_in} />;
};

export const Example: Story<{}> = WithDetection;

const WithDetectionAndDetach = () => {
  const [is_in, set_in] = useState(false);
  const handle_out = () => set_in(false);
  const handle_in = () => set_in(true);
  const [WrappedExample, detach] = withClickOutsideDetection(
    ExampleComponent,
    "example",
    handle_out,
    handle_in
  );
  return (
    <div>
      <WrappedExample clicked_out={is_in} />
      <button onClick={detach}>Detach listener</button>
    </div>
  );
};
export const ExampleWithDetaching: Story<{}> = WithDetectionAndDetach;
