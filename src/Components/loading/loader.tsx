import React, { CSSProperties, FC } from "react";
import { PropagateLoader } from "react-spinners";

export interface PS2LoaderProps {
  loading: boolean;
  size?: number;
  style?: CSSProperties;
}

const COLOUR = "rgba(185, 190, 190, 0.9)";

export const PS2Loader: FC<PS2LoaderProps> = ({ loading, size, style }) => {
  return (
    <div style={style}>
      <PropagateLoader color={COLOUR} loading={loading} size={size} />
    </div>
  );
};
