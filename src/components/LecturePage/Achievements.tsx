import React from "react";
// import { FiArrowUp, FiAward, FiBarChart } from "react-icons/fi";
import styles from "../../styles/LecturePage/Achievements.module.css";
// import ScrollContainer from "react-indiana-drag-scroll";

type Props = {
  data: Array<{
    number: number;
    type: string;
  }>;
};

const Achievements = (props: Props) => {
  // const { data } = props;

  // const renderIcon = (type: string) => {
  //   switch (type) {
  //     case "points":
  //       return <FiAward size={30} color="#00b894" />;
  //     case "progress":
  //       return <FiBarChart size={30} color="#6c5ce7" />;
  //     case "level-up":
  //       return <FiArrowUp size={30} color="#fd79a8" />;
  //     default:
  //       return <FiAward size={30} color="#00b894" />;
  //   }
  // };

  // const renderNumber = (type: string, number: number) => {
  //   switch (type) {
  //     case "points":
  //       return number;
  //     case "progress":
  //       return `${number}%`;
  //     case "level-up":
  //       return `+${number}`;
  //   }
  // };

  // const renderText = (type: string) => {
  //   switch (type) {
  //     case "points":
  //       return "points";
  //     case "progress":
  //       return "complete";
  //     case "level-up":
  //       return "level up";
  //     default:
  //       return "Points";
  //   }
  // };

  return (
    <div className={styles.Achievements}>
      <div className={styles.heading}>
        <span>Course</span> Achievements
      </div>
      {/* <ScrollContainer
        horizontal
        className={styles.achievementsContainer}
        hideScrollbars={false}
      >
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
      </ScrollContainer> */}
    </div>
  );
};

export default Achievements;
