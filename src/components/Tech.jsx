import React, { useState, useEffect } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    // Mobile fallback - show regular images instead of 3D balls
    return (
      <div className='flex flex-row flex-wrap justify-center gap-6'>
        {technologies.map((technology) => (
          <div
            className='w-20 h-20 flex items-center justify-center bg-tertiary rounded-full p-3 shadow-card'
            key={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-12 h-12 object-contain'
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>
    );
  }

  // Desktop - show 3D balls
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
