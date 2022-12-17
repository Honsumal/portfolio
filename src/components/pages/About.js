import * as React from 'react';
import Box from '@mui/material/Box';

export default function Inline() {
  return (
    <div className = 'container' style={{ width: '100%' }}>
        <br></br>
        <h1 className='centered'>Contact Me</h1>
        <p className = 'centered'>Please fill in the form below to contact me. Alternatively, click the link in the footer to be directed to your email app of choice.</p>
      <Box
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          flexDirection: 'row',
          justifyContent: 'space-evenly'}}>
        <Box
          component="div"
          sx={{
            display: 'inline',
            p: 1,
            m: 1,
          }}
        >
          inline
        </Box>
        <Box
          component="div"
          sx={{
            display: 'inline',
            p: 1,
            m: 1,
          }}
        >
          inline
        </Box>
      </Box>
    </div>
  );
}