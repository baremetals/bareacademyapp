import React from "react";
import styles from "../styles/LecturePage/index.module.css";
import classNames from "classnames";
import { TitleDescription, Tutor } from "components/LecturePage";

const course = {
  tutor: {
    name: "Lana Marandina",
    title: "Course tutor",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    url: "#",
  },
  title:
    "Learning How To Create a Beautiful Scene in Illustrator in 80 minutes",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam?",
};

type Props = {};

const LecturePage = (props: Props) => {
  return (
    <div className={styles.LecturePage}>
      <div className={styles.container}>
        <div className={classNames(styles.col, styles.col1)}>
          <Tutor tutor={course.tutor} />
          <TitleDescription
            title={course.title}
            description={course.description}
          />
        </div>
        <div className={classNames(styles.col, styles.col2)}></div>
      </div>
    </div>
  );
};

export default LecturePage;
