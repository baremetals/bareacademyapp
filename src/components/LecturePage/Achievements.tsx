import React, { useEffect, useRef, useState } from "react";
import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiArrowUp,
  FiAward,
  FiBarChart,
} from "react-icons/fi";
import styles from "../../styles/LecturePage/Achievements.module.css";
import classNames from "classnames";

type Props = {
  data: Array<{
    number: number;
    type: string;
  }>;
};

const Achievements = (props: Props) => {
  const { data } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const ACHIEVEMENT_WIDTH = 120;
  const MARGIN = 20;

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const ACTUAL_WIDTH = ACHIEVEMENT_WIDTH + MARGIN / 2;
      setOffset(Math.floor(container.offsetWidth / ACTUAL_WIDTH));
    }
  });

  const renderIcon = (type: string) => {
    switch (type) {
      case "points":
        return <FiAward size={30} color="#00b894" />;
      case "progress":
        return <FiBarChart size={30} color="#6c5ce7" />;
      case "level-up":
        return <FiArrowUp size={30} color="#fd79a8" />;
      default:
        return <FiAward size={30} color="#00b894" />;
    }
  };

  const renderNumber = (type: string, number: number) => {
    switch (type) {
      case "points":
        return number;
      case "progress":
        return `${number}%`;
      case "level-up":
        return `+${number}`;
    }
  };

  const renderText = (type: string) => {
    switch (type) {
      case "points":
        return "points";
      case "progress":
        return "complete";
      case "level-up":
        return "level up";
      default:
        return "Points";
    }
  };

  return (
    <div className={styles.Achievements}>
      <div className={styles.heading}>
        <span>Course</span> Achievements
      </div>
      <div
        className={styles.achievementsContainer}
        ref={containerRef}
        onScroll={(e) => {
          const container = e.currentTarget;
          console.log(
            container.scrollLeft,
            container.scrollWidth - container.offsetWidth
          );
        }}
      >
        <div
          className={classNames(styles.navigationLeft, {
            [styles.navigationDisabled]:
              offset === 0 || containerRef.current?.scrollLeft === 0,
          })}
        >
          <FiArrowLeftCircle />
        </div>
        <div
          className={classNames(styles.navigationRight, {
            [styles.navigationDisabled]:
              !containerRef.current?.scrollWidth ||
              offset === 0 ||
              containerRef.current?.scrollLeft ===
                containerRef.current?.scrollWidth -
                  containerRef.current?.offsetWidth,
          })}
        >
          <FiArrowRightCircle />
        </div>
        {data.map((item, index) => (
          <div className={styles.achievement} key={index}>
            <div className={styles.icon}>{renderIcon(item.type)}</div>
            <div>
              <div className={styles.number}>
                {renderNumber(item.type, item.number)}
              </div>
              <div className={styles.text}>{renderText(item.type)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
