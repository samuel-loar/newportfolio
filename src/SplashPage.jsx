// SplashPage.js

import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './SplashPage.css';

const SplashPage = () => {
  const [index, setIndex] = useState(0);

  const professions = ['Software Developer', 'Web Designer'];
  const profession = professions[index];

  const props = useSpring({
    from: { width: '0%' },
    to: { width: '100%' },
    reset: true,
    config: { duration: 1500 },
    onRest: () => {
      setTimeout(() => setIndex((prevIndex) => (prevIndex + 1) % professions.length), 2000);
    },
  });

  useEffect(() => {
    setTimeout(() => setIndex((prevIndex) => (prevIndex + 1) % professions.length), 2000);
  }, []);

  function handleScrollToProjects() {
    const projectsDiv = document.getElementById('portfolio');

    if (projectsDiv) {
      projectsDiv.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="splash-page">
      <div className="background-animation"></div>
      <div className="content">
        <h1 className="name">Sam Loar</h1>
        <p>
          <animated.span className="profession" style={{ ...props }}>{profession}</animated.span>
        </p>
        <a href="#portfolio" onClick={handleScrollToProjects}>
          Enter Portfolio
        </a>
      </div>
    </div>
  );
};

export default SplashPage;
