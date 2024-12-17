import React from 'react'
import Card from './card'
import './middleLanding.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default function middleLanding() {
  return (
   <Box sx={{ flexGrow: 1, backgroundColor:'#F5F9FF' }} >
      <Grid container>
      <Grid item xs={12} md={6} lg={6}>

        <div style={{margin:'10%'}}>
          <h2 style={{color:'#007bff'}}>Our Menu</h2>
        <div style={{width:'70%',color:'#007bff'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, temporibus voluptate quas dolor iusto eos animi! Qui, distinctio quia. Delectus mollitia at velit saepe odit iure, a quisquam ipsum eligendi!</div>
        <div style={{color:'#007bff',marginTop:'2%',display:'flex'}}>
          <div>
          <img src='/arrow.png' height={25} width={23}/>
          </div>
        <div>View Menu</div>
        </div>
        <div style={{marginTop:'15%',marginLeft:'10%'}}>
          <img src='/leaf3.png'/>
        </div>
        </div>
        </Grid>
        <Grid  item xs={12} md={6} lg={6}>
        <Box sx={{ flexGrow: 1}} >
      <Grid container>
      <Grid  item xs={12} md={12} lg={12}>
      <Grid container>
        <div className='flexing' >
      <div  className='Card1'>
      <Card name='Daily' pic = "/daily.png"/>
      </div>
      <div className="card2">
      <Card name='Sessional' pic = "/sessional.png"/>
      </div>
      </div>
      </Grid>
        </Grid>
        <Grid  item xs={12} md={12} lg={12}>
        <Grid container>
        <div className='flexing' >
      <div  className='Card1'>
      <Card name='Catering' pic = "/catering.png"/>
      </div>
      <div className="card2">
      <Card name='Special Menu' pic = "/special.png"/>
      </div>
      </div>
      </Grid>
        </Grid>
      </Grid>
    </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
