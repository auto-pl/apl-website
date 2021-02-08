import React, { FC, ReactNode, ComponentType } from "react";
import { ZoomControls } from "../menus/zoom_controls";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export interface WithZoomProps {
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

export function withZoom<TargetProps extends WithZoomProps>(
  TargetComponent: ComponentType<TargetProps>
): FC<TargetProps> {
  const WrappedComponent = (props: TargetProps) => {
    return (
      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform }: TransformArgs) => {
          <></>;
        }}
      </TransformWrapper>
    );
  };
}
