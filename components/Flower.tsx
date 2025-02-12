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
        className={`fixed bottom-0 right-10 animate-naturalWind ease-in-out infinite alternate`}
        style={{ animationDuration: `${randomDuration}s` }}
      >
        <img src="/svg/flower5.jpg" alt="flower" width={100} />
      </div>
    </div>
  );
}
