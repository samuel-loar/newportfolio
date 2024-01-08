import React, {useEffect, useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectCarousel from './components/Projects';
import SplashPage from './SplashPage';
import ProjectsMobile from './components/ProjectsMobile';
import Exp from "./components/Experience";
import About from "./components/About";
import SendEmail from './components/sendEmail';
import "./index.css";
import './ProjectsMobile.css';

const App = () => {

  const [showProjects, setShowProjects] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowProjects(window.innerWidth >= 900);
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={"app"}>
      <Header style={{'fontSize': "20px"}}/>
      <SplashPage />
      {showProjects ? (
        <div id="portfolio" className="projects-div">
          {<ProjectCarousel />
          }
        </div>
      ) : (
        <div id="portfolio" className="projects-div">
          <ProjectsMobile />
        </div>
      )}
      <div id="exp-div">
       <Exp />
      </div>
      <div>
        <About />
      </div>
      <div id="contact" className="email-div" style={{"text-align": "center"}}>
        <SendEmail />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
