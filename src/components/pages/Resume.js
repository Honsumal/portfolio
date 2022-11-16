import React from 'react';

export default function Resume() {
  return (
    <div>
      <br></br>
      <h1 className='centered'>Resume</h1>
      <h3>Download my resume using the following link</h3>
      <a href = {require('../../files/Alastair Lee\'s Resume - Webdev.pdf')} className='resume'>Resume</a>

      <h3>Full List of Technical Skills</h3>
      <h4>Front End Development</h4>
        <ul>
          <li>JavaScript ES6+</li>
          <li>CSS 3</li>
          <li>HTML 5</li>
          <li>JQuery</li>
          <li>BootStrap</li>
          <li>Materialize</li>
          <li>HandleBars</li>
          <li>React</li>
          <li>Python 3</li>
        </ul>
      <h4>Back End Development</h4>
        <ul>
          <li>Node</li>
          <li>Express</li>
          <li>SQL</li>
          <li>MySQL</li>
          <li>NoSQL</li>
          <li>MongoDB</li>
        </ul>
      <h4>Other Skills</h4>
        <ul>
          <li>ANSYS Fluent</li>
          <li>Mathematica</li>
          <li>LabView</li>
          <li>AutoCAD</li>
          <li>Space Claim</li>
          <li>Design Modeler</li>
          <li>Siemens NX</li>
        </ul>
      <h4>Spoken Languages</h4>
        <ul>
          <li>Cantonese</li>
          <li>Mandarin</li>
        </ul>
    </div>
  );
}
