import React from "react";

const DropletSVG: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    style={style}
    className="svg-droplet"
    viewBox=" 0 0 64 64"
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 2C22 18 10 28 10 40a22 22 0 0 0 44 0c0-12-12-22-22-38z"
      fill="#534b3c"
    />
  </svg>
);

export default DropletSVG;
