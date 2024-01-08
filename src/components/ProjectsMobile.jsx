import React, { useState } from 'react'; // Import your CSS file for styling
import { ChatSquare } from 'react-bootstrap-icons';
import { FaSpotify } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';


//const image1 = require('./blog-shot.png');
//const image2 = require('./ReactAppImg-modified.png');

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
        <ChatSquare onClick={(e) => handleClick(e, "ChatApp")} id="ChatApp" alt="Project 1" className="project-img"  size={200} color="aliceblue"/>
        <h4>Chatty-Cats</h4>
        {selectedProject === "ChatApp" && (
          <div className="project-details">
            <p className="project-description">The creation of the 'Chatty Cat' chat app stands out as a personal favorite among my recent projects. This endeavor brought together the intricacies of backend development, MongoDB database management, and frontend design, resulting in a cohesive and enjoyable user experience. The process of seamlessly integrating these components to craft a robust and interactive application was not only fulfilling but also showcased my ability to orchestrate the synergy of diverse technologies. 'Chatty Cat' represents the epitome of my passion for creating dynamic and engaging digital solutions.</p>
            <button onClick={() => window.open("https://github.com/Crochoir/chatty-cats", '_blank')}>View Source Code</button>
          </div>
        )}
      </div>
      <div className={`project-item ${selectedProject ? 'selected' : ''}`}>
        <FaSpotify onClick={(e) => handleClick(e, "SpotifyApp")} id="SpotifyApp"  alt="Project 2" className="project-img" size={200} color="aliceblue"/>
        {selectedProject === "SpotifyApp" && (
          <div className="project-details">
            <p className="project-description">The development of the Spotify App provided me with a valuable opportunity to hone my skills in working with external APIs. This project served as an immersive learning experience, allowing me to navigate the intricacies associated with interfacing with external data sources. Handling the idiosyncrasies inherent in such API calls strengthened my ability to troubleshoot and address challenges effectively. Through this endeavor, I not only expanded my technical proficiency but also gained practical insights into the nuances of integrating third-party services into applications.</p>
            <button onClick={() => window.open("https://github.com/Crochoir/SpotifyReact", "_blank")}>View Source Code</button>
          </div>
        )}
      </div>
      <div className={`project-item ${selectedProject ? 'selected' : ''}`}>
        <FaCode onClick={(e) => handleClick(e, "SnakeGame")} id="SnakeGame" alt="Project 3" className="project-img" size={200} color="aliceblue"/>
        {selectedProject === "SnakeGame" && (
          <div className="project-details">
            <p className="project-description">Developed a C# Snake Game, marking a significant milestone as my inaugural coding project. As an entry-level programmer, this endeavor required an extensive duration within the Visual Studio environment, utilizing C# for implementation. The process involved meticulous problem-solving and a considerable amount of research on various programming concepts. This undertaking not only honed my coding skills but also served as a foundational experience in navigating complex development tasks. Despite the challenges encountered, the completion of this project stands testament to my commitment to learning and my ability to overcome coding hurdles.  </p>
            <button onClick={() => window.open("https://github.com/Crochoir/snake-game-files","_blank")}>View Source Code</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsMobile;
