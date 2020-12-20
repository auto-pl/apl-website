// this file will have the hover menu for hexes
import React, { FC, ReactNode, CSSProperties } from "react";
import "../../styles/global/fade_in/fade_in.css";

type position = "bottom right" | "bottom left" | "top right" | "top left";

interface HoverMenuProps {
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
  };
}

const get_position_style = (
  options: HoverMenuProps["options"]
): CSSProperties => {
  const default_style: CSSProperties = {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  };
  if (!options) return default_style;

  // get 90% of the dimension
  const reduce_dimension = (n: number): number => n - 0.1 * n;
  const height = reduce_dimension(window.outerHeight);
  const width = reduce_dimension(window.outerWidth);
  console.log(height, width);

  switch (options.fixed_position) {
    case undefined:
      return default_style;

    case "bottom right":
      return {
        bottom: 0,
        right: 0,
      };

    case "top right":
      return {
        top: 0,
        right: 0,
      };

    case "bottom left":
      return {
        bottom: 0,
        left: 0,
      };

    case "top left":
      return {
        top: 0,
        left: 0,
      };

    default:
      return default_style;
  }
};

const base_style: CSSProperties = {
  border: "3px solid cyan",
  padding: "5px",
  position: "absolute",
  height: "40%",
  width: "10%",
  transition: "opacity 1s linear",
};

export const HoverMenu: FC<HoverMenuProps> = (props: HoverMenuProps) => {
  return (
    <div
      className="FadeIn"
      style={{ ...base_style, ...get_position_style(props.options) }}
    >
      <span>
        <b>{props.title}</b>
      </span>
      <div>
        {props.body_items.map((e, i) => (
          <span key={i}>{e}</span>
        ))}
      </div>
    </div>
  );
};
