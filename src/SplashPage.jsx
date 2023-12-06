// SplashPage.js

import React from 'react';
import './SplashPage.css';


const SplashPage = () => {

  function handleScrollToProjects() {
    const projectsDiv = document.getElementById('portfolio');
  
    if (projectsDiv) {
      projectsDiv.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="splash-page">
      <div className={"background-animation"}></div>
      <div className="content">
        <h1>Sam Loar</h1>
        <p>Web Developer & Designer</p>
        <a href="#portfolio" onClick={handleScrollToProjects}>View Portfolio</a>
      </div>
    </div>
  );
}

export default SplashPage;
