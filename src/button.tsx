import React, { useEffect, useState } from "react";
import "./DropletAnimation.css";

const Button: React.FC = () => {
  const [droplets, setDroplets] = useState<
    { id: number; left: number; delay: number }[]
  >([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setDroplets((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 90,
          delay: Math.random() * 1.5,
        },
      ]);
    }, 500);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div>
      {!isAnimating && (
        <button
          onClick={() => setIsAnimating(true)}
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "8px 16px",
            fontSize: "14px",
            borderRadius: "6px",
            background: "#3ac",
            color: "white",
            border: "none",
            cursor: "pointer",
            zIndex: 4,
          }}
        >
          Start Filtering
        </button>
      )}
    </div>
  );
};

export default Button;
