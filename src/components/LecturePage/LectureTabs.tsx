import React from "react";
import classNames from "classnames";
import styles from "../../styles/LecturePage/LectureTabs.module.css";

const LectureTabsContainer = (props: LectureTabsContainerProps) => {
  const { children, activeTab } = props;
  React.Children.forEach(children, (child) => {
    if (child?.type.name !== "LectureTab") {
      throw new Error("LectureTabs only accepts LectureTab as children");
    }
  });
  const childrenArray = React.Children.toArray(children);
  const [actTab, setActTab] = React.useState(activeTab || 0);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {childrenArray.map((child, index) => {
          return (
            <div
              style={{
                width: `${100 / childrenArray.length}%`,
              }}
              className={classNames(styles.tab, {
                [styles.tabActive]: index === actTab,
              })}
              key={index}
              onClick={() => setActTab(index)}
            >
              {child.props.title}
            </div>
          );
        })}
      </div>
      {childrenArray[actTab]}
    </div>
  );
};

const LectureTab = (props: LectureTabProps) => {
  const { children } = props;

  if (React.Children.count(children) !== 1) {
    throw new Error("LectureTab only accepts one child");
  }
  return <div className={styles.content}>{children}</div>;
};

type LectureTabsContainerProps = {
  children?: JSX.Element | JSX.Element[];
  activeTab?: number;
};

type LectureTabProps = {
  children?: React.ReactNode;
  title: string;
};

export default LectureTabsContainer;
export { LectureTab };
