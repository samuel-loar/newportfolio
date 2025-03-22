import React from 'react';
import './Projects.css'; 
import { ChatSquare } from 'react-bootstrap-icons';
import { FaSpotify } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';


class ProjectCarousel extends React.Component {
  openProject(projectName) {
    if(projectName === 'project1'){
        window.open("https://github.com/samuel-loar/SpotifyReact", "_blank")
    } else if (projectName === 'project3'){
        window.open("https://github.com/samuel-loar/chatty-cats", '_blank')
    } else if (projectName === 'project4'){
        window.open("https://github.com/samuel-loar/monkeyProj", '_blank')
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
            <p>Developing the Spotify App improved my external API skills, enhancing my ability to troubleshoot challenges and integrate third-party services into applications.</p>
          </div>
        </div>

        <div className="project-card" onClick={() => this.openProject('project2')}>
          <div className="card-front">
            <svg fill="aliceblue" height="100px" width="100px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
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
          </div>
          <div className="card-back">
            <p>Developed a C# Snake Game, my first coding project in Visual Studio. This entry-level project honed my coding skills through problem-solving and research, showcasing my commitment to learning and overcoming challenges.</p>
          </div>
        </div>

        <div className="project-card" onClick={() => this.openProject('project3')}>
          <div className="card-front">
            <ChatSquare size={100}/>
          </div>
          <div className="card-back">
            <p>Creating the 'Chatty Cat' app, a recent favorite project, involved blending backend development and MongoDB management. The integration demonstrates my ability to coordinate diverse technologies</p>
          </div>
        </div>

        <div className="project-card" onClick={() => this.openProject('project4')}>
          <div className="card-front">
            <FaCode size={100}/>
          </div>
          <div className="card-back">
            <p>Monkey language is a simple interpreter from a book by Thorsten Ball that parses and evaluates a custom scripting language with variables, arithmetic, and control structures, showcasing skills in lexer, parser, and AST design.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCarousel;
