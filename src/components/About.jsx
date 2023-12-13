import React from "react";
const fallPic = require('./fallpic-modified.png')

const About = (props) => {

 return (
   <div className="about-section">
   <div className="photo-container">
     <img src={fallPic} alt="Your Photo" />
   </div>
   <div className="text-container">
     <h2>Who am I?</h2>
     <p>
       {/* Your text about yourself and your journey */}
     </p>
   </div>
 </div>
 )
}

export default About;