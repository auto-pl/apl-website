import React, { CSSProperties, FC } from "react";
import { PropagateLoader } from "react-spinners";

export interface PS2LoaderProps {
  loading: boolean;
  size?: number;
  style?: CSSProperties;
  class_name?: string;
  /**
   * Defaults to true
   */
  center?: boolean;
  /**
   * Defaults to `PS2Loader{random number}`
   */
  id?: string;
}

const COLOUR = "rgba(185, 190, 190, 0.9)";
const random_num = (): number => Math.floor(Math.random() * 100);

export const PS2Loader: FC<PS2LoaderProps> = ({
  loading,
  size,
  style,
  class_name,
  center = true,
  id,
}) => {
  const target_id = id ?? `PS2Loader${random_num()}`;
  return (
    <div
      className={`${class_name ?? ""} ${center ? "horizontalCenter" : ""}`}
      style={style}
      id={target_id}
    >
      <PropagateLoader color={COLOUR} loading={loading} size={size} />
    </div>
  );
};
