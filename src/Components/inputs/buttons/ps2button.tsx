import React, { FC, useState, MouseEventHandler, ReactNode } from "react";
import Tooltip from "react-tooltip-lite";
import { ConditionalParent } from "../../HOCs/conditional_wrappers";
import "../../../styles/global/ps2_styles/buttons/buttons.css";
import "../../../styles/global/ps2_styles/text/text.css";

export interface BaseButtonProps {
  text?: string;
  tooltip_text?: string;
  on_click?: MouseEventHandler<HTMLButtonElement>;
  deactivated?: boolean;
}

export interface ButtonProps extends BaseButtonProps {
  /**
   * Defaults to an empty string
   */
  value?: any;
}

export const Button: FC<ButtonProps> = ({
  text,
  tooltip_text,
  on_click,
  deactivated = false,
  value = "",
}: ButtonProps) => {
  const wrapper_func = (children: ReactNode) => (
    <Tooltip
      content={tooltip_text}
      tipContentClassName="container container-body container-inline font-primary"
    >
      {children}
    </Tooltip>
  );
  return (
    <ConditionalParent condition={!!tooltip_text} wrapper={wrapper_func}>
      <div className="buttonDiv-notched-topLeft">
        <button
          type="button"
          className={`${deactivated ? "button-active" : "button-disabled"}`}
          onClick={on_click}
          disabled={deactivated}
          value={value}
        >
          {text}
        </button>
      </div>
    </ConditionalParent>
  );
};

export interface ToggleButtonProps extends BaseButtonProps {
  /**
   * The value of the button when the button is in the on state.
   * Defaults to true
   */
  on_value?: any;
  /**
   * The value of the button when the button is in the off state.
   * Defaults to false
   */
  off_value?: any;
}

export const ToggleButton = ({
  text,
  tooltip_text,
  on_click,
  deactivated,
  on_value = true,
  off_value = false,
}: ToggleButtonProps) => {
  const [toggled, set_toggled] = useState(false);
  const toggle = () => set_toggled(!toggled);
  const click_handler: typeof on_click = on_click || (() => {});

  return (
    <Button
      deactivated={deactivated}
      on_click={(e) => {
        toggle();
        click_handler(e);
      }}
      text={text}
      tooltip_text={tooltip_text}
      value={toggled ? on_value : off_value}
    />
  );
};
