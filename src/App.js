import React, {useEffect, useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './components/Projects';
import SplashPage from './SplashPage';
import ProjectsMobile from './components/ProjectsMobile';
import Exp from "./components/Experience";
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
      <Header />
      <SplashPage />
      {showProjects ? (
        <div id="portfolio" className="projects-div">
          <Projects />
        </div>
      ) : (
        <div id="portfolio" className="projects-div">
          <ProjectsMobile />
        </div>
      )}
      <div id="experience">
       <Exp />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
