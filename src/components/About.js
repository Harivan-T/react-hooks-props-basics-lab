import React from "react";


  
function About(props) {
  let paragraph = "";
  if (props.bio && props.bio !== null ) {
    paragraph = <p>{props.bio}</p>;
  }
  return (
    <div id="about">
      <h2>About Me</h2>
     <>{paragraph}</>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
