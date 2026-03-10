"use client";

import { useEffect, useState } from "react";

interface ScoreGaugeProps {
  score: number;
  grade: string;
  gradeColor: string;
}

export default function ScoreGauge({ score, grade, gradeColor }: ScoreGaugeProps) {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    let frame: number;
    const duration = 1500;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedScore(Math.round(eased * score));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [score]);

  const strokeColor =
    gradeColor === "green" ? "#16a34a" :
    gradeColor === "blue" ? "#2563EB" :
    gradeColor === "yellow" ? "#d97706" :
    gradeColor === "orange" ? "#ea580c" : "#DC2626";

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-52 h-52">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="12"
          />
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-extrabold" style={{ color: strokeColor }}>
            {animatedScore}
          </span>
          <span className="text-sm text-gray-400 mt-1">/ 100</span>
        </div>
      </div>
      <div
        className="mt-4 inline-block px-5 py-2 rounded-full text-sm font-bold"
        style={{
          backgroundColor: `${strokeColor}15`,
          color: strokeColor,
        }}
      >
        Grade: {grade}
      </div>
    </div>
  );
}
