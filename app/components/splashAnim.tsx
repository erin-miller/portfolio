"use client";
import { useEffect, useState } from "react";

export default function SplashAnim() {
  const [displayText, setDisplayText] = useState("");
  const [isBlinking, setIsBlinking] = useState(false);

  const text = "From Concept to Code";
  const speed = 45;

  useEffect(() => {
    let currIndex = -1;
    const interval = setInterval(() => {
      if (currIndex < text.length - 1) {
        currIndex++;
        setDisplayText((prev) => prev + text[currIndex]);
      } else {
        clearInterval(interval);
        setIsBlinking(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>
        {displayText}
        <span className={isBlinking ? "blink" : ""}>:</span>
      </h1>
      <style jsx>{`
        .blink {
          animation: blink-animation 1.5s steps(1, start) infinite;
        }

        @keyframes blink-animation {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
