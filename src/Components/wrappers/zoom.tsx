import React, { FC, ReactNode } from "react";
import { ZoomControls } from "../menus/zoom_controls";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export interface ZoomerProps {
  /**
   * These will be wrapped in a div whose dimensions and offsets are changed.
   */
  children: ReactNode;
}

type TransformCallback = () => {};
type TransformArgs = {
  zoomIn: TransformCallback;
  zoomOut: TransformCallback;
  resetTransform: TransformCallback;
};

export const Zoomer: FC<ZoomerProps> = ({ children }) => {
  return (
    <TransformWrapper>
      {({ zoomIn, zoomOut, resetTransform }: TransformArgs) => {
        <>
          <ZoomControls
            on_zoom_in={zoomIn}
            on_zoom_out={zoomOut}
            on_zoom_reset={resetTransform}
          />
          <TransformComponent>{children}</TransformComponent>
        </>;
      }}
    </TransformWrapper>
  );
};
