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

const VideoProgress = (props: VideoProgressProps) => {
  const { currentTime, duration, seek } = props;
  const [time, setTime] = useState(currentTime || 0);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (isNaN(Number(value))) return;
    setTime(Number(value));
    seek(Number(value));
  };

  return (
    <div className={styles.videoProgress}>
      <div
        className={styles.progress}
        style={{
          width: `calc(${(time / duration) * 100}% + 2px)`,
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

const SoundControl = (props: SoundControlProps) => {
  const { volume, setVolume } = props;

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.currentTarget.value));
  };

  return (
    <div className={styles.soundControl}>
      <div className={styles.soundControlButton}>
        {volume > 0 && volume <= 0.5 ? (
          <FiVolume1 size={20} />
        ) : volume > 0.5 && volume <= 1 ? (
          <FiVolume2 size={20} />
        ) : (
          <FiVolumeX size={20} />
        )}
      </div>
      <div className={styles.soundControlSlider}>
        <div className={styles.soundInputContainer}>
          <div
            className={styles.volume}
            style={{
              width: `${volume * 100}%`,
            }}
          ></div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

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

const FullScreen = (props: FullScreenProps) => {
  const { isFullScreen, onClick } = props;

  return (
    <div className={styles.fullScreen} onClick={onClick}>
      {isFullScreen ? <FiMinimize size={20} /> : <FiMaximize size={20} />}
    </div>
  );
};

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

const CourseVideo = (props: CourseVideoProps) => {
  const { video } = props;
  const { url } = video;
  const [videoState, setVideoState] = useState({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    isFullScreen: false,
    isBuffering: false,
    volume: 0.5,
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const handlePlayPause = () =>
    setVideoState({ ...videoState, isPlaying: !videoState.isPlaying });

  const handleFullScreen = () => {
    if (!videoContainerRef.current) return;
    const videoContainer = videoContainerRef.current;
    const docElmWithBrowsersFullScreenFunctions =
      videoContainer as HTMLDivElement & {
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
      };
    const docWithBrowsersExitFunctions = document as Document & {
      mozCancelFullScreen(): Promise<void>;
      webkitExitFullscreen(): Promise<void>;
      msExitFullscreen(): Promise<void>;
    };
    if (!videoState.isFullScreen) {
      if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
        docElmWithBrowsersFullScreenFunctions.requestFullscreen();
      } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) {
        /* Firefox */
        docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
      } else if (
        docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen
      ) {
        /* Chrome, Safari and Opera */
        docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
      } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) {
        /* IE/Edge */
        docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
      }
      setVideoState({ ...videoState, isFullScreen: true });
    } else {
      if (docWithBrowsersExitFunctions.exitFullscreen) {
        docWithBrowsersExitFunctions.exitFullscreen();
      } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) {
        /* Firefox */
        docWithBrowsersExitFunctions.mozCancelFullScreen();
      } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        docWithBrowsersExitFunctions.webkitExitFullscreen();
      } else if (docWithBrowsersExitFunctions.msExitFullscreen) {
        /* IE/Edge */
        docWithBrowsersExitFunctions.msExitFullscreen();
      } else {
      }
      setVideoState({ ...videoState, isFullScreen: false });
    }
  };

  const handleVolume = (value: number) =>
    setVideoState({ ...videoState, volume: value });

  const handleSeek = (value: number) => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    video.currentTime = value;
    if (!videoState.isPlaying || video.paused)
      setVideoState({ ...videoState, isPlaying: true });
    setVideoState({ ...videoState, currentTime: value });
  };

  useEffect(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    video.addEventListener("loadstart", () => {
      setVideoState({ ...videoState, isBuffering: true });
    });
    video.addEventListener("waiting", () => {
      setVideoState({ ...videoState, isBuffering: true });
    });
    video.addEventListener("stalled", () => {
      setVideoState({ ...videoState, isBuffering: true });
    });
    video.addEventListener("seeking", () => {
      setVideoState({ ...videoState, isBuffering: true });
    });
    video.addEventListener("canplay", () => {
      setVideoState({
        ...videoState,
        isPlaying: video.paused === false,
        duration: video.duration,
        isBuffering: false,
        volume: video.volume,
      });
    });

    video.addEventListener("timeupdate", () => {
      if (video.readyState === 4) {
        setVideoState({
          ...videoState,
          isPlaying: video.paused === false,
          currentTime: video.currentTime,
          duration: video.duration,
          isBuffering: video.readyState < 4,
          volume: video.volume,
        });
      }
    });
    video.load();
  }, [videoRef]);

  useEffect(() => {
    console.log("hh");
    if (!videoRef.current) return;
    const video = videoRef.current;
    if (videoState.isPlaying && video.paused) {
      video.play();
    } else if (!videoState.isPlaying && !video.paused) {
      video.pause();
    }
  }, [videoState.isPlaying]);

  useEffect(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    if (videoState.volume !== video.volume) {
      video.volume = videoState.volume;
    }
  }, [videoState.volume]);

  return (
    <div className={styles.CourseVideo} ref={videoContainerRef}>
      <Loading isLoading={videoState.isBuffering} />
      <div className={styles.controls}>
        <PLayPause isPlaying={videoState.isPlaying} onClick={handlePlayPause} />
        <VideoTime
          currentTime={videoState.currentTime}
          duration={videoState.duration}
        />
        <VideoProgress
          currentTime={videoState.currentTime}
          duration={videoState.duration}
          seek={handleSeek}
        />
        <SoundControl volume={videoState.volume} setVolume={handleVolume} />
        <FullScreen
          isFullScreen={videoState.isFullScreen}
          onClick={handleFullScreen}
        />
      </div>
      <video className={styles.video} src={url} ref={videoRef}></video>
    </div>
  );
};

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
};

type VideoProgressProps = {
  currentTime: number;
  duration: number;
  seek: (value: number) => void;
};

export default CourseVideo;
