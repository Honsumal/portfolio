import React from 'react';

export default function About() {
  return (
    <div>
      <br></br>
      <h1 className='centered'>About Me</h1>

      <img src={require('../../images/Self.jpg')} alt = "self" class = "self"></img>
      <p>
        Full Stack Web Developer with a background in Chemical Engineering. Currently pursuing a certificate in Full Stack Development from the University of Toronto, with skills in JavaScript, MySQL, MongoDB, and Python. Known for being able to work flexibly as a team member or team leader in a fast-paced group. Looking to grow as a programmer by building applications that can help in people's everyday lives. Looking to join a company to leverage my current skills, grow my repertoire, and become a valuable asset.
      </p>

    </div>
  );
}
