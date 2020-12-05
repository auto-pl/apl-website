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

  /**
   * The max height (pixels) of the loading cover.
   * Default: 100px
   */
  max_height?: number;

  /**
   * The max width (pixels) of the loading cover.
   * Default: 100px
   */
  max_width?: number;

  /**
   * How often the progress is incremented (ms).
   * Default: 10ms
   */
  period?: number;
};

const dot_style: CSSProperties = {
  height: "50px",
  width: "50px",
  backgroundColor: "#bbb",
  borderRadius: "50%",
  display: "inline-block",
  position: "relative",
  top: "0px",
  right: "0px",
  left: "0px",
  color: "grey",
};

const dot_text_style: CSSProperties = {
  color: "white",
  fontSize: "10px",
  textAlign: "center",
  margin: "auto",
  position: "relative",
};

type DotProps = {
  style: CSSProperties;
  done: boolean;
};

const Dot: React.FC<DotProps> = (props: DotProps) => {
  const text_style = props.done
    ? { ...dot_text_style, color: "white" }
    : dot_text_style;
  return (
    <span
      style={{
        ...(props.style || dot_style),
        backgroundColor: props.done ? "green" : "grey",
      }}
    >
      <span style={text_style}>{props.done ? "Loaded!" : "Loading..."}</span>
    </span>
  );
};

/**
 * All possible animations for LoadingCover
 */
export const ANIMATION_TYPES = {
  left_to_right: "left_to_right",
  right_to_left: "right_to_left",
  top_to_bottom: "top_to_bottom",
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
  const left_to_right: animation_func = (progress) => ({
    ...dot_style,
    left: `${progress}px`,
  });

  switch (animation_type) {
    case "left_to_right":
      return left_to_right;
    case "right_to_left":
      return (progress) => ({ ...dot_style, right: `${progress}px` });
    case "top_to_bottom":
      return (progress) => ({ ...dot_style, top: `${progress}px` });
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
  const [done, set_done] = useState(false);
  let interval_id: number;

  const period = props.period || 10;
  const max_pixels =
    props.animation_type === ANIMATION_TYPES.top_to_bottom
      ? props.max_height || 100
      : props.max_width || 100;

  /** Increment `progress` */
  const update = () => {
    // make sure that the component wasn't deleted
    const component = document.getElementById(props.id);
    if (!component) window.clearInterval(interval_id);
    setProgress(progress === max_pixels ? 0 : progress + 1);
  };

  const clear_loader = () => {
    window.clearInterval(interval_id);
    set_done(true);
  };
  props.promise.then(clear_loader);

  interval_id = window.setInterval(update, period);
  const style = get_animation(props.animation_type)(progress);
  return <Dot style={style} done={done}></Dot>;
};
