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
   * How much % of max_width / max_height it will move per ms
   */
  rate: number;
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
  return (
    <span
      style={{
        ...(props.style || dot_style),
        backgroundColor: props.done ? "green" : "grey",
      }}
    >
      <span style={dot_text_style}>
        {props.done ? "Loaded!" : "Loading..."}
      </span>
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
  const [progress, set_progress]: [
    number,
    (progress: number) => void
  ] = useState(0);
  const [done, set_done] = useState(false);
  const [backwards, set_backwards] = useState(false);
  let interval_id: number;

  const max_pixels =
    props.animation_type === ANIMATION_TYPES.top_to_bottom
      ? props.max_height || 100
      : props.max_width || 100;
  const rate = props.rate * max_pixels;

  /** Increment `progress` */
  const update = () => {
    // make sure that the component wasn't deleted
    const component = document.getElementById(props.id);
    if (!component) window.clearInterval(interval_id);

    // Decide how to move
    if (progress === max_pixels) {
      set_backwards(backwards ? false : true); // change directions
    }
    const distance_to_move = backwards ? -1 * rate : rate;
    set_progress(progress === max_pixels ? 0 : progress + distance_to_move);
  };

  const clear_loader = () => {
    window.clearInterval(interval_id);
    set_done(true);
  };
  props.promise.then(clear_loader);

  interval_id = window.setInterval(update, 1);
  const style = get_animation(props.animation_type)(progress);
  return <Dot style={style} done={done}></Dot>;
};
