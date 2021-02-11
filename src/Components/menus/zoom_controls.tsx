<<<<<<< HEAD
import React, { FC, MouseEventHandler, memo } from "react";
=======
import React, { FunctionComponent, MouseEventHandler, memo } from "react";
>>>>>>> custom-map
import { Portal } from "../wrappers/portal";
import "../../styles/global/ps2_styles/text.css";
import "../../styles/zoom_controls/zoom_controls.css";

export interface ZoomControlsProps {
  zoom_in: MouseEventHandler;
  zoom_out: MouseEventHandler;
  zoom_reset: MouseEventHandler;
}
<<<<<<< HEAD
export const ZoomControls: FC<ZoomControlsProps> = memo(
=======
export const ZoomControls: FunctionComponent<ZoomControlsProps> = memo(
>>>>>>> custom-map
  ({ zoom_in, zoom_out, zoom_reset }) => {
    const buttons_contents: Array<[string, MouseEventHandler]> = [
      ["+", zoom_in],
      ["-", zoom_out],
      ["x", zoom_reset],
    ];

    return (
      <Portal>
        <div className="zoom-container">
          {buttons_contents.map(([text, handler], i) => (
            <button
              key={i}
              className="font-primary zoom-button"
              onClick={handler}
            >
              {text}
            </button>
          ))}
        </div>
      </Portal>
    );
  }
);
