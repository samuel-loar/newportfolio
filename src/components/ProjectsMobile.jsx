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
        <h4>Spotify History App</h4>
        {selectedProject === "SpotifyApp" && (
          <div className="project-details">
            <p className="project-description">The development of the Spotify App provided me with a valuable opportunity to hone my skills in working with external APIs. This project served as an immersive learning experience, allowing me to navigate the intricacies associated with interfacing with external data sources. Handling the idiosyncrasies inherent in such API calls strengthened my ability to troubleshoot and address challenges effectively. Through this endeavor, I not only expanded my technical proficiency but also gained practical insights into the nuances of integrating third-party services into applications.</p>
            <button onClick={() => window.open("https://github.com/Crochoir/SpotifyReact", "_blank")}>View Source Code</button>
          </div>
        )}
      </div>
      <div className={`project-item ${selectedProject ? 'selected' : ''}`}>
        <svg className="project-img"  onClick={(e) => handleClick(e, "SnakeGame")} id="SnakeGame Capa_1" fill="aliceblue" height="200px" width="200px" version="1.1" xmlns="http://www.w3.org/2000/svg" 
	            viewBox="0 0 465.001 465.001" >
                <path d="M342.026,194.017H122.974c-13.047,0-23.662-10.615-23.662-23.662c0-13.047,10.615-23.662,23.662-23.662l148.832,0
	c8.927,14.641,22.511,22.344,39.542,22.344c31.602,0,72.318-37.612,79.29-64.5h36.68l26.868,13.229
	c1.066,0.525,2.195,0.773,3.307,0.773c2.768,0,5.43-1.538,6.734-4.188c1.83-3.716,0.3-8.212-3.416-10.042l-14.769-7.271
	l14.769-7.271c3.716-1.83,5.245-6.325,3.416-10.042s-6.325-5.247-10.042-3.416l-26.868,13.229h-36.68
	c-1.2-4.629-3.399-9.573-6.38-14.591c-0.287-0.674-0.669-1.296-1.13-1.852c-14.858-23.579-46.286-48.057-71.779-48.057
	c-17.032,0-30.616,7.703-39.542,22.344H122.974C55.166,47.381,0,102.547,0,170.355s55.166,122.974,122.974,122.974l219.053,0
	c13.047,0,23.662,10.615,23.662,23.662c0,13.047-10.615,23.662-23.662,23.662H49.656C22.275,340.653,0,362.928,0,390.308
	s22.275,49.656,49.656,49.656h292.371c67.808,0,122.974-55.166,122.974-122.974S409.834,194.017,342.026,194.017z M57.156,355.653
	h27.156v69.312H57.156V355.653z M99.312,355.653h27.156v69.312H99.312V355.653z M15,390.308c0-16.534,11.641-30.392,27.156-33.829
	v67.658C26.641,420.7,15,406.842,15,390.308z M342.026,424.964H141.467v-69.312h200.559c21.318,0,38.662-17.344,38.662-38.662
	c0-21.318-17.344-38.662-38.662-38.662l-219.053,0C63.437,278.328,15,229.891,15,170.355S63.437,62.381,122.974,62.381h153.231
	c2.821,0,5.403-1.583,6.684-4.097c6.251-12.278,15.561-18.247,28.459-18.247c16.758,0,37.488,14.838,51.044,30.344h-22.383
	l-6.445-4.603c-3.371-2.409-8.056-1.627-10.462,1.744c-2.408,3.371-1.626,8.055,1.744,10.462l8.401,6
	c1.272,0.909,2.796,1.397,4.359,1.397h35.431c2.324,4.388,3.645,8.407,3.645,11.656s-1.321,7.268-3.645,11.656h-35.431
	c-1.563,0-3.087,0.488-4.359,1.397l-8.4,6c-3.371,2.407-4.151,7.091-1.744,10.462c1.464,2.049,3.769,3.141,6.109,3.141
	c1.509,0,3.032-0.454,4.353-1.397l6.444-4.603h22.383c-13.556,15.506-34.286,30.344-51.044,30.344
	c-12.899,0-22.208-5.969-28.459-18.247c-1.28-2.514-3.862-4.097-6.684-4.097l-153.232,0c-21.318,0-38.662,17.344-38.662,38.662
	c0,21.318,17.344,38.662,38.662,38.662h219.053c59.537,0,107.974,48.437,107.974,107.974S401.563,424.964,342.026,424.964z"/>
        </svg>
        <h4>Snake Game in C#</h4>
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
