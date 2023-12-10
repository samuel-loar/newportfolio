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

    // Call it once on mount to check for elements already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={expDivRef}>
      <section
        ref={topSectionRef}
        className={`section top ${sectionVisibility.top ? "slide-in" : ""}`}
      >
        <h2>Top Section</h2>
        <p>Content for the top section</p>
      </section>

      <section
        ref={middleSectionRef}
        className={`section middle ${sectionVisibility.middle ? "slide-in" : ""}`}
      >
        <h2>Middle Section</h2>
        <p>Content for the middle section</p>
      </section>

      <section
        ref={bottomSectionRef}
        className={`section bottom ${sectionVisibility.bottom ? "slide-in" : ""}`}
      >
        <h2>Bottom Section</h2>
        <p>Content for the bottom section</p>
      </section>
    </div>
  );
};

export default Exp;
