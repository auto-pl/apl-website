import React, { FC, MouseEventHandler, ReactNode } from "react";
import className from "classnames";
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
   * Defaults to an empty string
   */
  value?: any;
  children: ReactNode;
  tooltip_text?: string;
  deactivated?: boolean;
  notch_location?: NotchLocation;
  /**
   * Extra props for the button element.
   */
  ...button_props?: any[];
}

const decide_notch_class = (notch_location: NotchLocation): string => {
  return className(
    { "button-notched-top-left": notch_location === NotchLocation.TOP_LEFT },
    { "button-notched-top-right": notch_location === NotchLocation.TOP_RIGHT },
    { "button-full": notch_location === NotchLocation.NONE }
  );
};

const get_classes = (notch_location: NotchLocation): string => {
  const constant_clases = "font-primary";
  return [decide_notch_class(notch_location), constant_clases].join(" ");
};

export const PS2Button: FC<PS2ButtonProps> = ({
  children,
  tooltip_text,
  deactivated = false,
  value = "",
  notch_location = NotchLocation.TOP_LEFT,
  ...button_props
}: PS2ButtonProps) => {
  return (
    <>
      <button
        type="button"
        className={get_classes(notch_location)}
        disabled={deactivated}
        value={value}
        data-tip={tooltip_text}
        {...button_props}
      >
        {children}
      </button>
      <ReactTooltip className="font-primary container" />
    </>
  );
};
