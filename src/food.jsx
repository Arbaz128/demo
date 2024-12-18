import React from 'react';
import { Grid,Typography } from '@mui/material';
import './food.css'
const ResponsiveGrid = () => {
  return (
    <Grid  container style={{backgroundColor:' #f8f9fc'}}>
      <Grid item xs={12} sm={6} md={6}>
        <img className='imgMrg'  src='/food.png' alt='food'/>
      </Grid>
      
      <Grid item xs={12} sm={6} md={6}>
        <div style={{margin:'20%',width:'70%',display:'flex',flexDirection:'column'}}>
      <Typography variant="h3" className='best' >
        The best <span className='comfort'> vegans Comfort food</span> in Los Angelas
      </Typography>
      <div style={{marginTop:'5%'}}>
      <Typography variant="p" className='lorem'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, sapiente. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, sapiente.
      </Typography>
      </div>
      <div style={{marginTop:'5%'}}>
      <Typography variant="p" style={{color:' #007bff',display:'flex',alignItems:'center',alignContent:'center'}}>
        <div>
          <img src='/menuArrow.png' width={30} height={20}/>
      </div>
      <div className='about'>
      About Us
      </div>
    
      </Typography>
      </div>

      </div>
      </Grid>
    </Grid>
  );
};

export default ResponsiveGrid;
