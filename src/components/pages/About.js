import React from 'react';
import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BsChevronDown } from 'react-icons/bs';

export default function About() {
  return (
    <div>
     
      <div className='container'>
        <br></br>
        <h1 className='centered'>About Me</h1>
        <Box
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            flexDirection: 'row',
            justifyContent: 'space-evenly'}}>     
          
          <Box component="div"
            sx={{
              display: 'inline',
              width: '45%',
              p: 1,
              m: 1,
            }}>
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<BsChevronDown />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>About Me</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    <p>
                      Full Stack Web Developer with a background in Chemical Engineering. Recently obtained a certificate in Full Stack Development from a bootcamp from the University of Toronto, 
                      with skills in JavaScript, MySQL, MongoDB, and GraphQL. 
                      Known for being able to work flexibly as both a team member and team leader in a fast-paced group. 
                      Looking to join a company to leverage my current skills, grow my repertoire, and become a valuable asset. 
                      Primary language is English, with fluency in Cantonese and a background in Mandarin.
                    </p>  
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<BsChevronDown />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>My Skills</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
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
                        <li style={{display: 'block'}}>NoSQL</li>
                        <li style={{display: 'block'}}>MongoDB</li>
                        <li style={{display: 'block'}}>Apollo GraphQL</li>
                        <li style={{display: 'block'}}>Test-Driven Development</li>
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
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<BsChevronDown />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>My Resume</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    <p>Click on the link below to view and download a copy of my resume:</p> 
                      <a href = {require('../../files/Alastair Lee\'s Resume - Webdev.pdf')} className='resume'>Resume</a> 
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>  
          </Box>
          <Box component="div"
            sx={{
              display: 'inline',
              width: '45%',
              p: 1,
              m: 1,
            }}>
              <Box
                component='div'>
              <img src={require('../../images/Self.jpg')} alt = "self" className='self'></img>
            </Box>
          </Box>
        </Box>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
