import React from "react";

type Design = {
  width: string;
  height: string;
  color: string;
};
export const LogoShape = ({
  width = "50px",
  height = "50px",
  color = "currentColor",
}: Design) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 110 110"
    >
      <title>logo design</title>
      <path
        className="cls-2"
        fill={color}
        d="M88.58,23.88l-37.76.2v4.23h0v2.41h0V35H66.54A11.28,11.28,0,0,1,78,45.57c0,.18,0,.37,0,.55a11.55,11.55,0,0,1-.71,4.05,1.58,1.58,0,0,1-.13.34l-42.32,0V35H44V24.11l-11.23.06h-9V88.38h.32v.39l19.87,0v-11H34.82V61.53h11.8v.07H77.13l.15.4A11.7,11.7,0,0,1,66.65,77.68h-.53c-.34,0-.66,0-1,0s-.8,0-1.32,0h-13v11l11.1,0h4.9C78.66,88.34,88.29,78.17,88.29,66a22.44,22.44,0,0,0-2.35-10,22.41,22.41,0,0,0,2.35-10,22.1,22.1,0,0,0-3-11.17h3.31Z"
      />
    </svg>
  );
};
