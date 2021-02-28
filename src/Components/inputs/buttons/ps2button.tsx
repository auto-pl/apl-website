import React, { FC, ReactNode } from "react";
import className from "classnames";
import { get_class_names } from "../../../Utils/component_utils";
import ReactTooltip from "react-tooltip";
import "../../../styles/global/ps2_styles/buttons.css";
import "../../../styles/global/ps2_styles/text.css";
import "../../../styles/global/ps2_styles/containers.css";

export enum ButtonType {
  NOTCHED_TOP_LEFT = "NOTCHED_TOP_LEFT",
  NOTCHED_CORNERS = "NOTCHED_CORNERS",
  NO_NOTCH = "NO_NOTCH",
  NO_SIDES = "NO_SIDES",
}

export interface PS2ButtonProps {
  /**
   * Nodes to contain within the button
   */
  children?: ReactNode;
  /**
   * The text to display on hover
   */
  tooltip_text?: string;
  /**
   * Where to put the notch on the button (if at all).
   * Use the `ButtonType` enum when passing this prop.
   */
  button_type?: ButtonType;
  /**
   * Extra props for the button element.
   */
  [button_prop_name: string]: any;
}

const decide_button_type_class = (
  button_type: ButtonType,
  disabled: boolean
): string => {
  return className(
    {
      "button-notched-top-left": button_type === ButtonType.NOTCHED_TOP_LEFT,
    },
    { "button-notched-corners": button_type === ButtonType.NOTCHED_CORNERS },
    { "button-full": button_type === ButtonType.NO_NOTCH },
    { "button-no-sides": button_type === ButtonType.NO_SIDES },
    { "button-disabled": disabled }
  );
};

export const PS2Button: FC<PS2ButtonProps> = ({
  children = undefined,
  tooltip_text = undefined,
  button_type = ButtonType.NOTCHED_CORNERS,
  ...button_props
}: PS2ButtonProps) => {
  return (
    <>
      <button
        type="button"
        className={get_class_names("font-primary", decide_button_type_class)(
          button_type,
          button_props.disabled
        )}
        data-tip={tooltip_text}
        {...button_props}
      >
        {children}
      </button>
      <ReactTooltip className="font-primary container" />
    </>
  );
};
