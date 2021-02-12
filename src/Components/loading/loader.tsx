import React, { CSSProperties, FC } from "react";
import { PropagateLoader } from "react-spinners";

export interface PS2LoaderProps {
  loading: boolean;
  size?: number;
  style?: CSSProperties;
  class_name?: string;
}

const COLOUR = "rgba(185, 190, 190, 0.9)";

export const PS2Loader: FC<PS2LoaderProps> = ({
  loading,
  size,
  style,
  class_name,
}) => {
  return (
    <div className={class_name} style={style}>
      <PropagateLoader color={COLOUR} loading={loading} size={size} />
    </div>
  );
};
