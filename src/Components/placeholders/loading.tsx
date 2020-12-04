import React, { useState, CSSProperties } from "react";

type LoadingCoverProps = {
  /**
   * The promise that the component waits for
   */
  promise: Promise<any>;
  /**
   * The id that the component uses.
   */
  id: string;

  /**
   * The animation that will be used for the loading cover.
   * This should be obtained from `ANIMATION_TYPES`
   */
  animation_type: string;
};

const dot_style: CSSProperties = {
  height: "25px",
  width: "25px",
  backgroundColor: "#bbb",
  borderRadius: "50%",
  display: "inline-block",
  position: "relative",
  top: "0px",
  bottom: "0px",
  right: "0px",
  left: "0px",
};

type DotProps = {
  style: CSSProperties;
};

const Dot: React.FC<DotProps> = (props: DotProps) => {
  return <span style={props.style || dot_style}></span>;
};

/**
 * All possible animations for LoadingCover
 */
export const ANIMATION_TYPES = {
  left_to_right: "left-to-right",
  right_to_left: "right-to-left",
  top_to_bottom: "top-to-bottom",
  bottom_to_top: "bottom-to-top",
};

/**
 * A function that returns a style based on the current progress value.
 */
type animation_func = (progress: number) => CSSProperties;

/**
 * Get the function that generates a style based on the current progress.
 * @param animation_type The desired type of animation function to get
 */
const get_animation = (animation_type: string): animation_func => {
  const left_to_right = (progress: number) => ({
    ...dot_style,
    left: progress,
  });

  switch (animation_type) {
    case "left_to_right":
      return left_to_right;
    case "right_to_left":
      return (progress: number) => ({ ...dot_style, right: progress });
    case "top_to_bottom":
      return (progress: number) => ({ ...dot_style, top: progress });
    case "bottom_to_top":
      return (progress: number) => ({ ...dot_style, bottom: progress });
    default:
      return left_to_right;
  }
};

/**
 * Cover the parent element in a loading screen until some promise completes
 * @param props See `LoadingCoverProps` for greater detail
 */
export const LoadingCover: React.FC<LoadingCoverProps> = (
  props: LoadingCoverProps
) => {
  const [progress, setProgress]: [
    number,
    (progress: number) => void
  ] = useState(0);
  let interval_id: number;

  /** Increment `progress` */
  const update = () => {
    // make sure that the component wasn't deleted
    const component = document.getElementById(props.id);
    if (!component) window.clearInterval(interval_id);
    setProgress(progress === 10000 ? 0 : progress + 1);
  };

  const clear_loader = () => {
    window.clearInterval(interval_id);
    setProgress(100);
  };
  props.promise.then(clear_loader);

  interval_id = window.setInterval(update, 100);
  return <Dot style={get_animation(props.animation_type)(progress)}></Dot>;
};
