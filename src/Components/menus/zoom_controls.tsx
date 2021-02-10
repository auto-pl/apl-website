import React, { FC, useState, MouseEventHandler } from "react";
import { Portal } from "../wrappers/portal";
import "../../styles/global/ps2_styles/text.css";
import "../../styles/zoom_controls/zoom_controls.css";

export type ZoomHandler = (zoom_level: number) => void;

export interface ZoomControlsProps {
  /**
   * Does nothing by default
   */
  on_zoom_in?: ZoomHandler;

  /**
   * Does nothing by default
   */
  on_zoom_out?: ZoomHandler;

  /**
   * Does nothing by default.
   */
  on_zoom_reset?: ZoomHandler;
}

export const ZoomControls: FC<ZoomControlsProps> = ({
  children,
  on_zoom_in = () => {},
  on_zoom_out = () => {},
  on_zoom_reset = () => {},
}) => {
  const [zoom_level, set_zoom_level] = useState(0);

  const zoom_in: MouseEventHandler = (e) => {
    set_zoom_level(zoom_level + 1);
    on_zoom_in(zoom_level);
  };
  const zoom_out: MouseEventHandler = (e) => {
    set_zoom_level(zoom_level - 1);
    on_zoom_out(zoom_level);
  };
  const reset: MouseEventHandler = (e) => {
    set_zoom_level(0);
    on_zoom_reset(zoom_level);
  };

  return (
    <Portal>
      <div className="zoom-container">
        <button className="zoom-button font-primary" onClick={zoom_in}>
          +
        </button>
        <button className="zoom-button font-primary" onClick={zoom_out}>
          -
        </button>
        <button className="zoom-button font-primary" onClick={reset}>
          x
        </button>
      </div>
    </Portal>
  );
};
