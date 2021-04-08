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
  const inner: FC<TransformArgs> = ({
    zoomIn,
    zoomOut,
    resetTransform,
  }: TransformArgs) => {
    return (
      <>
        <ZoomControls
          zoom_in={zoomIn}
          zoom_out={zoomOut}
          zoom_reset={resetTransform}
        />
        <TransformComponent>{children}</TransformComponent>
      </>
    );
  };
  return <TransformWrapper>{inner}</TransformWrapper>;
};
