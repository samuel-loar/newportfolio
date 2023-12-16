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
       My name is Sam, and I love becoming <u>more:</u> 
     </h3>
     <p>
          I'm {myAge} years old, I'm married with one son, and I've been learning software engineering for quite a while now. It hasn't been easy, but if there's anything that can be said about my experience, it's that I have made myself dedicated.
          At my core, I am hopelessly, irretrievably drawn toward the pursuit of improvement and the application of knowledge. 2022-2023 has been some of the hardest years as someone enterring into the tech atmosphere, and yet, I feel more dedicated than ever to reaching higher. 
     </p>
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
          first things first: I can <u>use</u> frameworks, libraries, even newer tools still in their genesis; but I am not a 'frameworker', nor a 'librarian', or a subject worshipping at the proverbial feet of new technology. I am a programmer, and I'm continuing to travel further down this long and winding road.
          I have used plenty of programming languages that I've found particularly interesting. including, but not limited to:
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