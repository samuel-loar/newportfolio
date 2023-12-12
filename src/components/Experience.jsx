import React, { useRef, useEffect, useState } from "react";

const Exp = () => {
  const expDivRef = useRef(null);
  const topSectionRef = useRef(null);
  const middleSectionRef = useRef(null);
  const bottomSectionRef = useRef(null);

  const [sectionVisibility, setSectionVisibility] = useState({
    top: false,
    middle: false,
    bottom: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = {
        top: topSectionRef.current,
        middle: middleSectionRef.current,
        bottom: bottomSectionRef.current,
      };

      for (const [key, section] of Object.entries(sections)) {
        if (isElementInViewport(section)) {
          setSectionVisibility((prevVisibility) => ({
            ...prevVisibility,
            [key]: true,
          }));
        } else {
          setSectionVisibility((prevVisibility) => ({
            ...prevVisibility,
            [key]: false,
          }));
        } 
      }
    };

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={expDivRef}>
      <h1>My Life in The Working World</h1>
      <div style={{"height": "2px", "backgroundColor": "aliceblue", "marginBottom": "10px"}}></div>
      <section
        ref={topSectionRef}
        className={`section top ${sectionVisibility.top ? "slide-in" : ""}`}
      >
        <h2>Microtronix Esolutions</h2>
        <h3>IT Maintenance Technician/Software Developer</h3>
        <p>My IT Maintenance Technician role at this company includes network installation/configuration, server installation/maintenance and much more that there is simply not enough room here for. As a software developer, I've been able to hone my skills on projects using several different tools such as: React.js, php, joomla, the cordova mobile framework, simple Python scripts, and some SQL query writing</p>
      </section>

      <section
        ref={middleSectionRef}
        className={`section middle ${sectionVisibility.middle ? "slide-in" : ""}`}
      >
        <h2>Aldi</h2>
        <h3>Assistant Store Manager</h3>
        <p>until the beginning of 2023, i had started taking up a leadership position at Aldi as an Assistant Store Manager. in this role I was able to build up habits of project management, healthy leadership, and other responsibilities that, while not directly in the programming realm, I believe taught me many skills that I can carry on with me for the rest of my life</p>
      </section>

      <section
        ref={bottomSectionRef}
        className={`section bottom ${sectionVisibility.bottom ? "slide-in" : ""}`}
      >
        <h2>Subway</h2>
        <p>What was your first job? What did you learn? So many of us look at our first jobs as something to run from, never looking back. However, I feel that understanding appreciating our beginnings is a crucial part of our experiences as working people. This job taught me so much, from refining my work ethic and time management to my interaction between my coworkers and customers/clients. I'm glad that I have had the opportunity to pursue new and exciting jobs, but I wouldn't trade this experience for anything.</p>
      </section>
    </div>
  );
};

export default Exp;
