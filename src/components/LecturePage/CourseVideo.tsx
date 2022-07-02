import React, { useEffect, useRef, useState } from "react";
import {
  FiLoader,
  FiMaximize,
  FiMinimize,
  FiPause,
  FiPlay,
  FiVolume1,
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";
import styles from "../../styles/LecturePage/CourseVideo.module.css";
import ReactPlayer from "react-player";
import classNames from "classnames";
let timer: ReturnType<typeof setTimeout>;

/**
 * @component VideoProgress
 * @desc Video progress and buffering bars
 */
const VideoProgress = (props: VideoProgressProps) => {
  const { currentTime, duration, seekTo, loaded } = props;
  const [time, setTime] = useState(currentTime);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!seekTo || isNaN(Number(value))) return;
    setTime(Number(value));
    seekTo(Number(value), "seconds");
  };

  return (
    <div className={styles.videoProgress}>
      <div
        className={styles.progress}
        style={{
          width: `calc(${(time / duration) * 100}% + 2px)`,
        }}
      ></div>
      <div
        className={styles.loaded}
        style={{
          width: `${loaded * 100}%`,
        }}
      ></div>
      <input
        type="range"
        min={0}
        max={duration}
        step={0.01}
        value={time}
        onInput={handleSeek}
      />
    </div>
  );
};

/**
 * @component SoundControl
 * @desc
 */
const SoundControl = (props: SoundControlProps) => {
  const { volume, setVolume, isMuted, setIsMuted } = props;

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numberValue = Number(value);
    if (isNaN(numberValue)) return;
    setVolume(numberValue);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className={styles.soundControl}>
      <div className={styles.soundControlButton} onClick={handleMute}>
        {isMuted && <FiVolumeX size={20} />}
        {!isMuted &&
          (volume > 0 && volume <= 0.5 ? (
            <FiVolume1 size={20} />
          ) : volume > 0.5 && volume <= 1 ? (
            <FiVolume2 size={20} />
          ) : (
            <FiVolumeX size={20} />
          ))}
      </div>
      <div className={styles.soundControlSlider}>
        <div className={styles.soundInputContainer}>
          <div
            className={styles.volume}
            style={{
              width: `${(isMuted ? 0 : volume) * 100}%`,
            }}
          ></div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

/**
 * @component Loading
 * @desc Loading spinner when video is buffering or seeking
 */
const Loading = ({ isLoading }: LoadingProps) => {
  if (!isLoading) return null;
  return (
    <div className={styles.loading}>
      <div className={styles.loadingIcon}>
        <FiLoader size={40} />
      </div>
    </div>
  );
};

/**
 * @component FullScreen
 * @desc The full screen button
 */
const FullScreen = (props: FullScreenProps) => {
  const { isFullScreen, onClick } = props;

  return (
    <div className={styles.fullScreen} onClick={onClick}>
      {isFullScreen ? <FiMinimize size={20} /> : <FiMaximize size={20} />}
    </div>
  );
};

/**
 * @component VideoTime
 * @desc The time/duration of the video
 */
const VideoTime = (props: VideoTimeProps) => {
  const { currentTime, duration } = props;

  const renderTime = (time: number) => {
    const hours = Math.floor(time / 3600) || 0;
    const minutes = Math.floor((time % 3600) / 60) || 0;
    const seconds = Math.floor(time % 60) || 0;

    return `${hours > 0 ? `${hours}:` : ""}${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className={styles.videoTime}>
      <span>{renderTime(currentTime)}</span> /{" "}
      <span>{renderTime(duration)}</span>
    </div>
  );
};

/**
 * @component PlayPause
 * @desc The play/pause button
 */
const PLayPause = (props: PLayPauseProps) => {
  const { isPlaying, onClick } = props;
  return (
    <div className={styles.playPause} onClick={onClick}>
      {isPlaying ? (
        <FiPause size={20} strokeWidth={3} />
      ) : (
        <FiPlay size={20} strokeWidth={3} />
      )}
    </div>
  );
};

/**
 * @component CourseVideo
 * @desc Video player component
 */
const CourseVideo = (props: CourseVideoProps) => {
  const { video } = props;
  const { url } = video;
  const [videoState, setVideoState] = useState<videoStateType>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    isFullScreen: false,
    isBuffering: false,
    volume: 0.5,
    isMuted: false,
    loaded: 0,
  });
  const [isControlsHidden, setIsControlsHidden] = useState(false);
  const reactPlayerRef = useRef<ReactPlayer>(null);
  const courseVideoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!courseVideoRef.current) return;
    const courseVideo = courseVideoRef.current;
    courseVideo.addEventListener("mousemove", () => {
      clearTimeout(timer);
      if (videoState.isPlaying) {
        timer = setTimeout(mouseStopped, 3000);
      }
      if (isControlsHidden) setIsControlsHidden(false);
    });
    const mouseStopped = () => {
      setIsControlsHidden(true);
    };

    return () => {
      clearTimeout(timer);
    };
  }, [isControlsHidden, videoState.isPlaying]);

  const handleBuffer = () =>
    setVideoState((x) => ({ ...x, isBuffering: true }));

  const handleReady = () =>
    setVideoState((x) => ({ ...x, isBuffering: false }));

  const handleDuration = (duration: number) =>
    setVideoState((x) => ({ ...x, duration }));

  const handlePlayPause = () => {
    const { isPlaying } = videoState;
    setVideoState((x) => ({ ...x, isPlaying: !isPlaying }));
  };

  const handleProgress = (state: {
    loaded: number;
    played: number;
    loadedSeconds: number;
    playedSeconds: number;
  }) => {
    const { loaded, playedSeconds } = state;
    setVideoState((x) => ({ ...x, loaded, currentTime: playedSeconds }));
  };

  const handleVolume = (volume: number) =>
    setVideoState((x) => ({ ...x, volume }));

  const handleMute = (isMuted: boolean) =>
    setVideoState((x) => ({ ...x, isMuted }));

  const handleFullScreen = () => {};

  return (
    <div
      className={classNames(styles.CourseVideo, {
        [styles.CourseVideoCursorHidden]: isControlsHidden,
      })}
      ref={courseVideoRef}
    >
      <Loading isLoading={videoState.isBuffering} />
      <div
        className={classNames(styles.controls, {
          [styles.controlsHidden]: isControlsHidden,
          [styles.controlsVisible]: !isControlsHidden,
        })}
      >
        <PLayPause isPlaying={videoState.isPlaying} onClick={handlePlayPause} />
        <VideoTime
          currentTime={videoState.currentTime}
          duration={videoState.duration}
        />
        <VideoProgress
          currentTime={videoState.currentTime}
          duration={videoState.duration}
          seekTo={reactPlayerRef.current?.seekTo || null}
          loaded={videoState.loaded}
        />
        <SoundControl
          volume={videoState.volume}
          setVolume={handleVolume}
          isMuted={videoState.isMuted}
          setIsMuted={handleMute}
        />
        <FullScreen
          isFullScreen={videoState.isFullScreen}
          onClick={handleFullScreen}
        />
      </div>
      <ReactPlayer
        ref={reactPlayerRef}
        playing={videoState.isPlaying}
        url={url}
        width="100%"
        height="100%"
        onBuffer={handleBuffer}
        onReady={handleReady}
        volume={videoState.volume}
        muted={videoState.isMuted}
        onDuration={handleDuration}
        onProgress={handleProgress}
      />
    </div>
  );
};

/**
 * The components prop types:
 */

type CourseVideoProps = {
  video: {
    url: string;
  };
};

type PLayPauseProps = {
  isPlaying: boolean;
  onClick: () => void;
};

type VideoTimeProps = {
  currentTime: number;
  duration: number;
};

type FullScreenProps = {
  isFullScreen: boolean;
  onClick: () => void;
};

type LoadingProps = {
  isLoading: boolean;
};

type SoundControlProps = {
  volume: number;
  setVolume: (value: number) => void;
  isMuted: boolean;
  setIsMuted: (value: boolean) => void;
};

type VideoProgressProps = {
  currentTime: number;
  duration: number;
  seekTo:
    | ((amount: number, type?: "seconds" | "fraction" | undefined) => void)
    | null;
  loaded: number;
};

type videoStateType = {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  isBuffering: boolean;
  isFullScreen: boolean;
  volume: number;
  isMuted: boolean;
  loaded: number;
};

export default CourseVideo;
