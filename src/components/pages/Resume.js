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
          <li style={{display: 'block'}}>JavaScript ES6+</li>
          <li style={{display: 'block'}}>CSS 3</li>
          <li style={{display: 'block'}}>HTML 5</li>
          <li style={{display: 'block'}}>JQuery</li>
          <li style={{display: 'block'}}>BootStrap</li>
          <li style={{display: 'block'}}>Materialize</li>
          <li style={{display: 'block'}}>HandleBars</li>
          <li style={{display: 'block'}}>React</li>
          <li style={{display: 'block'}}>Python 3</li>
        </ul>
      <h4>Back End Development</h4>
        <ul>
          <li style={{display: 'block'}}>Node</li>
          <li style={{display: 'block'}}>Express</li>
          <li style={{display: 'block'}}>SQL</li>
          <li style={{display: 'block'}}>MySQL</li>
          <li style={{display: 'block'}}>NoSQL</li>
          <li style={{display: 'block'}}>MongoDB</li>
        </ul>
      <h4>Other Skills</h4>
        <ul>
          <li style={{display: 'block'}}>ANSYS Fluent</li>
          <li style={{display: 'block'}}>Mathematica</li>
          <li style={{display: 'block'}}>LabView</li>
          <li style={{display: 'block'}}>AutoCAD</li>
          <li style={{display: 'block'}}>Space Claim</li>
          <li style={{display: 'block'}}>Design Modeler</li>
          <li style={{display: 'block'}}>Siemens NX</li>
        </ul>
      <h4>Language Skills</h4>
        <ul>
          <li style={{display: 'block'}}>Cantonese</li>
          <li style={{display: 'block'}}>Mandarin</li>
        </ul>
    </div>
  );
}
