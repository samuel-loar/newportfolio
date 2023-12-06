import React from 'react'; // Import your CSS file for styling

const image1 = require('./blog-shot.png');
const image2 = require('./ReactAppImg-modified.png');
const image3 = require('./snakegame-shot-modified (1).png');

const ProjectsMobile = () => {

  const handleClick = (e) => {
    if(e.target.id === "ChatApp") {
        window.open("https://github.com/Crochoir/chatty-cats", '_blank');
    } else if(e.target.id === "SpotifyApp") {
        window.open("https://github.com/Crochoir/SpotifyReact", "_blank")
    } else if(e.target.id === "SnakeGame") {
        window.open("https://github.com/Crochoir/snake-game-files","_blank")
    }
  }


  return (
    <div className="projects-mobile">
      <div className="project-item">
        <img onClick={handleClick} id="ChatApp" src={image1} alt="Project 1" className="project-img" />
        <p className="project-description">Blog App, will be replaced by chat app</p>
      </div>
      <div className="project-item">
        <img onClick={handleClick} id="SpotifyApp" src={image2} alt="Project 2" className="project-img" />
        <p className="project-description">Spotify App using the Spotify API</p>
      </div>
      <div className="project-item">
        <img onClick={handleClick} id="SnakeGame" src={image3} alt="Project 3" className="project-img" />
        <p className="project-description">C# snake game</p>
      </div>
    </div>
  );
};

export default ProjectsMobile;
