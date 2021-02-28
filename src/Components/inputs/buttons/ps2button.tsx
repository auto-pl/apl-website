import React, { FC, ReactNode } from "react";
import className from "classnames";
import { get_class_names } from "../../../Utils/component_utils";
import ReactTooltip from "react-tooltip";
import "../../../styles/global/ps2_styles/buttons.css";
import "../../../styles/global/ps2_styles/text.css";
import "../../../styles/global/ps2_styles/containers.css";

export enum NotchLocation {
  TOP_LEFT = "TOP_LEFT",
  TOP_RIGHT = "TOP_RIGHT",
  NONE = "NONE",
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
   * Use the `NotchLocation` enum when passing this prop.
   */
  notch_location?: NotchLocation;
  /**
   * Extra props for the button element.
   */
  [button_prop_name: string]: any;
}

const decide_notch_class = (
  notch_location: NotchLocation,
  disabled: boolean
): string => {
  return className(
    { "button-notched-top-left": notch_location === NotchLocation.TOP_LEFT },
    { "button-notched-top-right": notch_location === NotchLocation.TOP_RIGHT },
    { "button-full": notch_location === NotchLocation.NONE },
    { "button-disabled": disabled }
  );
};

export const PS2Button: FC<PS2ButtonProps> = ({
  children = undefined,
  tooltip_text = undefined,
  notch_location = NotchLocation.TOP_LEFT,
  ...button_props
}: PS2ButtonProps) => {
  return (
    <>
      <button
        type="button"
        className={get_class_names("font-primary", decide_notch_class)(
          notch_location,
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
