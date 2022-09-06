import React from "react";
import styles from "../../styles/Home/TitlePopOver.module.css";

interface Props {
  children: string | undefined;
  size: number;
}

let timer: ReturnType<typeof setTimeout>;

const TitlePopOver = ({ children, size }: Props) => {
  const [isPopOverShown, setIsPopOverShown] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const titleRef = React.useRef<HTMLDivElement>(null);
  const popOverRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!titleRef.current || !popOverRef.current) return;
    const titleBounds = titleRef.current?.getBoundingClientRect();
    const popOverBounds = popOverRef.current?.getBoundingClientRect();
    if (!titleBounds || !popOverBounds) return;
    const x = titleBounds.x + titleBounds.width / 2 - popOverBounds.width / 2;
    const y = titleBounds.y - popOverBounds.height - 10;
    setPosition({ x, y });
  }, []);

  return (
    <div className={styles.TitlePopOverWrapper}>
      <div
        className={styles.TitlePopOverTitle}
        style={{
          fontSize: size,
        }}
        ref={titleRef}
        onMouseEnter={() => {
          timer = setTimeout(() => {
            setIsPopOverShown(true);
          }, 800);
        }}
        onMouseLeave={() => {
          clearTimeout(timer);
          setIsPopOverShown(false);
        }}
      >
        <span>{children}</span>
      </div>
      <div
        ref={popOverRef}
        className={styles.TitlePopOverPopover}
        style={{
          visibility: isPopOverShown ? "visible" : "hidden",
          top: position.y,
          left: position.x,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TitlePopOver;
