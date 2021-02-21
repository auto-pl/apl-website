import React, { FC, useState, MouseEventHandler, ReactNode } from "react";
import ReactTooltip from "react-tooltip";
import "../../../styles/global/ps2_styles/buttons.css";
import "../../../styles/global/ps2_styles/text.css";
import "../../../styles/global/ps2_styles/containers.css";

export interface BaseButtonProps {
  children: ReactNode;
  tooltip_text?: string;
  on_click?: MouseEventHandler<HTMLButtonElement>;
  deactivated?: boolean;
  class_name?: string;
}

export interface ButtonProps extends BaseButtonProps {
  /**
   * Defaults to an empty string
   */
  value?: any;
}

export const PS2Button: FC<ButtonProps> = ({
  children,
  tooltip_text,
  on_click,
  deactivated = false,
  value = "",
  class_name,
}: ButtonProps) => {
  return (
    <>
      <button
        type="button"
        className={`buttonDiv-notched-topLeft font-primary ${class_name || ""}`}
        onClick={on_click}
        disabled={deactivated}
        value={value}
        data-tip={tooltip_text}
      >
        {children}
      </button>
      <ReactTooltip className="font-primary container" />
    </>
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

// TODO: make ToggleButton. This is not a good toggle
export const PS2ToggleButton = ({
  children,
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
    <PS2Button
      deactivated={deactivated}
      on_click={(e) => {
        toggle();
        click_handler(e);
      }}
      children={children}
      tooltip_text={tooltip_text}
      value={toggled ? on_value : off_value}
    />
  );
};
