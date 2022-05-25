// Styles
import styles from "./UiVideo.module.css";
import cn from "classnames";
import propTypes from "prop-types";

// Hooks
import { useEffect, useRef } from "react";

const UiVideo = ({ src, classes, playbackRate = 1.0 }) => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, []);
  return (
    <video
      className={cn(styles.video, classes)}
      loop
      autoPlay
      muted
      ref={videoRef}
    >
      <source src={src} />
    </video>
  );
};

UiVideo.propTypes = {
  src: propTypes.string,
  classes: propTypes.string,
  playbackRate: propTypes.number,
};
export default UiVideo;
