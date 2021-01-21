// this file will have the hover menu for hexes
import React, { ReactNode, CSSProperties, memo } from "react";
import { Portal } from "../HOCs/portal";
import { TextContainer, ContainerHeader } from "../containers/text_container";
import "../../styles/global/fade_in/fade_in.css";
import "../../styles/global/corners/corners.css";

type position = "bottom right" | "bottom left" | "top right" | "top left";

export interface HoverMenuProps {
  /**
   * The name of the menu to be placed at the top
   */
  title: string;
  /**
   * What should be displayed in the body.
   */
  body_items: Array<ReactNode>;

  options?: {
    /**
     * Whether the menu should appear in a set spot.
     * Should be one of [bottom right, bottom left, top right, top left]
     */
    fixed_position?: position;
    width?: string;
    height?: string;
  };
}

const get_position_class = (options: HoverMenuProps["options"]): string => {
  const default_style = "";

  if (!options) return default_style;

  switch (options.fixed_position) {
    case undefined:
      return default_style;

    case "bottom right":
      return "BottomRight";

    case "top right":
      return "TopRight";

    case "bottom left":
      return "BottomLeft";

    case "top left":
      return "TopLeft";

    default:
      return default_style;
  }
};

const base_style: CSSProperties = {
  padding: "5px",
  position: "absolute",
  height: "40%",
  width: "10%",
  transition: "opacity 1s linear",
  zIndex: 1,
};

export const HoverMenu = memo((props: HoverMenuProps) => {
  return (
    <Portal>
      <div
        className={`FadeIn ${get_position_class(props.options)}`}
        style={{
          ...base_style,
          width: props.options?.width || base_style.width,
          height: props.options?.height || base_style.height,
        }}
      >
        <TextContainer
          header={<ContainerHeader>{props.title}</ContainerHeader>}
          width={100}
          height={100}
        >
          <p
            style={{
              textAlign: "center",
              margin: "0 0 5px 0",
              width: "100%",
            }}
          ></p>
          <div>
            {props.body_items.map((e, i) => (
              <span key={i}>{e}</span>
            ))}
          </div>
        </TextContainer>
      </div>
    </Portal>
  );
});
