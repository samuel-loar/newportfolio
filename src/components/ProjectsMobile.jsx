import React, { useState } from 'react'; // Import your CSS file for styling

const image1 = require('./blog-shot.png');
const image2 = require('./ReactAppImg-modified.png');
const image3 = require('./snakegame-shot-modified (1).png');

const ProjectsMobile = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (e, projectId) => {
    // Set the selected project for rendering description
    setSelectedProject(projectId);
  }

  return (
    <div className="projects-mobile">
      <h1>My Favorite Personal Projects</h1>
      <div className={`project-item ${selectedProject ? 'selected' : ''}`}>
        <img onClick={(e) => handleClick(e, "ChatApp")} id="ChatApp" src={image1} alt="Project 1" className="project-img" />
        {selectedProject === "ChatApp" && (
          <div className="project-details">
            <p className="project-description">The "Chatty Cat" chat app is my favorite of my latest projects because of how fun it was to put the backend, mongoDB database, and the frontend together to make something great!</p>
            <button onClick={() => window.open("https://github.com/Crochoir/chatty-cats", '_blank')}>View Source Code</button>
          </div>
        )}
      </div>
      <div className={`project-item ${selectedProject ? 'selected' : ''}`}>
        <img onClick={(e) => handleClick(e, "SpotifyApp")} id="SpotifyApp" src={image2} alt="Project 2" className="project-img" />
        {selectedProject === "SpotifyApp" && (
          <div className="project-details">
            <p className="project-description">Spotify App was a great way for me to practice with outside API calls, and all the idiosynchrocies that come with it.</p>
            <button onClick={() => window.open("https://github.com/Crochoir/SpotifyReact", "_blank")}>View Source Code</button>
          </div>
        )}
      </div>
      <div className={`project-item ${selectedProject ? 'selected' : ''}`}>
        <img onClick={(e) => handleClick(e, "SnakeGame")} id="SnakeGame" src={image3} alt="Project 3" className="project-img" />
        {selectedProject === "SnakeGame" && (
          <div className="project-details">
            <p className="project-description">C# snake game. This was my first real coding project. Being new to programming in general, this one took a long time in visual studio using C#, and a lot of googling.  </p>
            <button onClick={() => window.open("https://github.com/Crochoir/snake-game-files","_blank")}>View Source Code</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsMobile;
