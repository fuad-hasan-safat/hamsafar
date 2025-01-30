'use client'
import React, { useState, useEffect } from "react";

export default function Flower() {
  const [randomDuration, setRandomDuration] = useState(10);

  useEffect(() => {
    setRandomDuration(Math.random() * 4 + 8); // Random between 8s - 12s
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Flower */}
      <div
        className={`absolute bottom-0 right-10 animate-naturalWind ease-in-out infinite alternate`}
        style={{ animationDuration: `${randomDuration}s` }}
      >
        <img src="/svg/flower5.jpg" alt="flower" width={100} />
      </div>

      {/* Wind Particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`wind-particle absolute opacity-50 animate-windFlow ${Math.random() * 10 + 5}s linear infinite`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {/* 🌿 You can replace this with a small leaf SVG or emoji */}
            𓂃 𓈒𓏸
          </span>
        ))}
      </div>
    </div>
  );
}
