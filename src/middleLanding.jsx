import React from 'react';
import Card from './card';
import './middleLanding.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function MiddleLanding() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#F5F9FF', margin: '10%' }}>
      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4"className='ourMenu'>Our Menu</Typography>
          <Typography variant="body1" className='des' sx={{ width: '70%', color: '#2F75E6' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            temporibus voluptate quas dolor iusto eos animi! Qui, distinctio quia.
            Delectus mollitia at velit saepe odit iure, a quisquam ipsum eligendi!
          </Typography>
          <Box sx={{ color: '#2F75E6', marginTop: '2%', display: 'flex', alignItems: 'center' }}>
            <img src='/arrow.png' height={25} width={23} alt='arrow' />
            <Typography sx={{ marginLeft: 1 }}>View Menu</Typography>
          </Box>
          <Box sx={{ marginTop: '15%', marginLeft: '10%' }}>
            <img src='/leaf3.png' alt='leaf decoration' />
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} direction="column" alignItems="center">
            {/* First Row of Cards */}
            <Grid item>
              <div className='flexing'>
                <div className='Card1'>
                  <Card name='Daily' pic='/daily.png' />
                </div>
                <div className='Card2'>
                  <Card name='Sessional' pic='/sessional.png' />
                </div>
              </div>
            </Grid>

            {/* Second Row of Cards */}
            <Grid item>
              <div className='flexing'>
                <div className='Card1'>
                  <Card name='Catering' pic='/catering.png' />
                </div>
                <div className='Card2'>
                  <Card name='Special Menu' pic='/special.png' />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
