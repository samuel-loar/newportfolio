import React from "react";
const fallPic = require('./fallpic-modified.png')

const About = (props) => {

  const date = new Date().getFullYear();
  const myAge = date - 1999;

 return (
   <div className="about-section">
   <div className="photo-container">
     <img src={fallPic} alt="Sarah and I" />
   </div>
   <div className="text-container">
     <h2>Who am I?</h2>
     <hr style={{"borderTop": "1px solid white"}} />
     <h3>
      I'm Sam, and I have a genuine love for self-development.
     </h3>
     <p>
      I'm {myAge} years old, married with one son, and I've been immersed in software engineering for a while. It's been challenging, but I've only become more dedicated. At my core, I'm driven by a passion for progress and the application of knowledge. Despite the difficulties entering the tech industry in 2022-2023, I continue reaching for high goals.</p>
   </div>
   <div className="self-contained-quote">
    <h4>
      “Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives - choice, not chance, determines your destiny.”
      <span>― Aristotle</span>
    </h4>
  </div>
   <div className="text-container">
      <h2>What can I do?</h2>
      <p>
        At the core of my expertise lies a dynamic proficiency in leveraging frameworks, libraries, and emerging tools, adapting swiftly to the ever-evolving landscape of technology. However, I do not confine myself to being a mere 'frameworker' or 'librarian,' nor do I blindly follow the latest trends. 
        Instead, I strive to be a more seasoned traditional software developer, committed to the continuous exploration of my craft.
        Throughout my journey, I have demonstrated proficiency in numerous programming languages, each selected based on its relevance to the task at hand. Some notable languages I have worked with include, but are not limited to:
      </p>
      <p>
        --Python-- <br />
        --Java-- <br/>
        --C#-- <br />
        --PHP--<br />
       --Javascript-- <br />
       I've created the most projects in Javascript, and the popular framework: React.js as these were what much of my early learning came with.
      </p>
      <p>
          At my work I've been introduced to so much more in the IT world. Network managements and server management has broadened the ways I have thought about software and things like web management and cloud computing.
          I've gone from using Windows for everything, to becoming comfortable under the hood of the Linux OS. Even going as far as using a raspberry pi with linux OS to host a website from home. I don't claim to be some technological prodigy, but I am commited to learning and doing more.
      </p>
   </div>
 </div>
 )
}

export default About;