import React, { FC, useState, MouseEventHandler } from "react";
import Tooltip from "react-tooltip-lite";
import "../../../styles/global/ps2_styles/buttons/buttons.css";
import "../../../styles/global/ps2_styles/text/text.css";

export interface ButtonProps {
  text?: string;
  tooltip_text?: string;
  on_click?: MouseEventHandler<HTMLButtonElement>;
  deactivated?: boolean;
  value: any;
}

export const Button: FC<ButtonProps> = ({
  text,
  tooltip_text,
  on_click,
  deactivated = false,
  value,
}: ButtonProps) => {
  return (
    <Tooltip
      content={tooltip_text}
      tipContentClassName="container container-body container-inline font-primary"
    >
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
    </Tooltip>
  );
};

export interface ToggleButtonProps extends ButtonProps {}

export const ToggleButton = ({
  text,
  tooltip_text,
  on_click,
  deactivated,
}: ToggleButtonProps) => {
  const [toggled, set_toggled] = useState(deactivated);
  const toggle = () => set_toggled(!toggled);
  const click_handler: typeof on_click = on_click || function (event) {};

  return (
    <Button
      deactivated={toggled}
      on_click={(e) => {
        toggle();
        click_handler(e);
      }}
      text={text}
      tooltip_text={tooltip_text}
    />
  );
};
