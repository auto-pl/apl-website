import React, { FC, ReactNode } from "react";
import { ConditionalParent } from "../../wrappers/conditional_wrappers";
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
   * Whether to remove the onclick visual feedback
   */
  disable_click_animation?: boolean;
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
  disabled: boolean,
  disable_click_animation: boolean,
  user_classes: string | undefined
): string => {
  return className(
    {
      "button-notched-top-left": button_type === ButtonType.NOTCHED_TOP_LEFT,
    },
    { "button-notched-corners": button_type === ButtonType.NOTCHED_CORNERS },
    { "button-full": button_type === ButtonType.NO_NOTCH },
    { "button-no-sides": button_type === ButtonType.NO_SIDES },
    { "button-disabled": disabled },
    { "animation-disabled": disable_click_animation },
    user_classes
  );
};

export const PS2Button: FC<PS2ButtonProps> = ({
  children = undefined,
  tooltip_text = undefined,
  button_type = ButtonType.NOTCHED_CORNERS,
  disable_click_animation,
  ...button_props
}: PS2ButtonProps) => {
  // handle className differently so it doesn't override the classes set by this component
  const { className, ...filtered_props } = button_props;
  return (
    <>
      <button
        className={get_class_names("font-primary", decide_button_type_class)(
          button_type,
          filtered_props.disabled,
          disable_click_animation,
          className
        )}
        data-tip={tooltip_text}
        {...filtered_props}
      >
        <ConditionalParent
          wrapper={(children) => <del>{children}</del>}
          condition={button_props.disabled as boolean}
        >
          {children}
        </ConditionalParent>
      </button>
      {tooltip_text ? (
        <ReactTooltip className="font-primary container" />
      ) : null}
    </>
  );
};
