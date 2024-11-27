import React from 'react';
import { Grid,Typography } from '@mui/material';

const ResponsiveGrid = () => {
  return (
    <Grid  container style={{backgroundColor:' #f8f9fc'}}>
      <Grid item xs={12} sm={6} md={6}>
        <img style={{margin:'20%'}} src='/food.png' alt='food'/>
      </Grid>
      
      <Grid item xs={12} sm={6} md={6}>
        <div style={{margin:'20%',width:'70%',display:'flex',flexDirection:'column'}}>
      <Typography variant="h3" style={{color:' #007bff'}}>
        The best vegans Comfort food in Los Angelas
      </Typography>
      <div style={{marginTop:'5%'}}>
      <Typography variant="p" style={{color:' #007bff'}}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, sapiente. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, sapiente.
      </Typography>
      </div>
      <div style={{marginTop:'5%'}}>
      <Typography variant="p" style={{color:' #007bff',display:'flex',alignItems:'center',alignContent:'center'}}>
        <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={20} height={20}><path fill=' #007bff' d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
      </div>
      <div>
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
