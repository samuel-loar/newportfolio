import React from 'react';
import './Projects.css'; 
import { ChatSquare } from 'react-bootstrap-icons';
import { FaSpotify } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';

class ProjectCarousel extends React.Component {
  openProject(projectName) {
    if(projectName === 'project1'){
        window.open("https://github.com/Crochoir/SpotifyReact", "_blank")
    } else if (projectName === 'project3'){
        window.open("https://github.com/Crochoir/chatty-cats", '_blank')
    } else {
        window.open("https://github.com/Crochoir", '_blank')
    }
  }

  render() {
    return (
      <div id="carousel-container">
        <div className="project-card" onClick={() => this.openProject('project1')}>
          <div className="card-front">
            <FaSpotify size={100}/>
          </div>
          <div className="card-back">
            <p>Description of Project 1</p>
          </div>
        </div>

        <div className="project-card" onClick={() => this.openProject('project2')}>
          <div className="card-front">
            <FaCode size={100}/>
          </div>
          <div className="card-back">
            <p>Description of Project 2</p>
          </div>
        </div>

        <div className="project-card" onClick={() => this.openProject('project3')}>
          <div className="card-front">
            <ChatSquare size={100}/>
          </div>
          <div className="card-back">
            <p>Description of Project 3</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCarousel;
