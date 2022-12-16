import React from 'react';

export default function About() {
  return (
    <div>
      <br></br>
      
      <div className='container'>
        <h1 className='centered'>About Me</h1>
        <p>
          Full Stack Web Developer with a background in Chemical Engineering. Recently obtained a certificate in Full Stack Development from a bootcamp from the University of Toronto, with skills in JavaScript, MySQL, MongoDB, and GraphQL. Known for being able to work flexibly as both a team member and team leader in a fast-paced group. Looking to join a company to leverage my current skills, grow my repertoire, and become a valuable asset. Primary language is English, with fluency in Cantonese and a background in Mandarin.
        </p>
        
        <img src={require('../../images/Self.jpg')} alt = "self" className = "self"></img>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
      

    </div>
  );
}
