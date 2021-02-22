import React, { ComponentType, FC, useEffect } from "react";
import { WrappedProps } from "../../interfaces/HOCs";

interface WithClickOutsideDetectionProps {
  /**
   * The id of the element to track clicks outside of.
   */
  id_of_element: string;
}

export function withClickOutsideDetection<TargetProps extends {}>(
  TargetComponent: ComponentType<TargetProps>
): FC<WrappedProps<TargetProps, WithClickOutsideDetectionProps>> {
  return (props) => {
    useEffect(() => {
      document.addEventListener("click", (e: MouseEvent) => {});
    });
    return <TargetComponent {...(props as TargetProps)} />;
  };
}
