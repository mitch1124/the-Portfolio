import { useEffect, useState } from "react";
import baseball from "@/assets/baseball.png";

export const BaseballBackground = () => {
  const [baseballs, setBaseballs] = useState([]);

  useEffect(() => {
    generateLogo();

    const handleResize = () => {
      generateLogo();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateLogo = () => {
    const numOfBaseballs = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newBaseballs = [];

    for (let i = 0; i < numOfBaseballs; i++) {
      newBaseballs.push({
        id: i,
        size: Math.random() * 20 + 10,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        rotation: Math.random() * 360,
      });
    }

    setBaseballs(newBaseballs);
  };


  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {baseballs.map((baseballs) => (
        <img
          key={baseball.id}
          src={baseball}
          alt="baseball"
          className="absolute animate-pulse-subtle"
          style={{
            width: baseballs.size + "px",
            height: baseballs.size + "px",
            left: baseballs.x + "%",
            top: baseballs.y + "%",
            opacity: baseballs.opacity,
            transform: `rotate(${baseballs.rotation}deg)`,
          }}
        />
      ))}

    </div>
  );
};