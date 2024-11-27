import React from 'react'
import Card from './card'
import './middleLanding.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default function middleLanding() {
  return (
   <Box sx={{ flexGrow: 1, backgroundColor:'#f8f9fc' }} >
      <Grid container>
      <Grid item xs={12} md={8} lg={8}>

        <div style={{margin:'10%'}}>
          <h2 style={{color:'#007bff'}}>Our Menu</h2>
        <div style={{width:'70%',color:'#007bff'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, temporibus voluptate quas dolor iusto eos animi! Qui, distinctio quia. Delectus mollitia at velit saepe odit iure, a quisquam ipsum eligendi!</div>
        <div style={{color:'#007bff',marginTop:'2%',display:'flex'}}>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20}><path fill='#007bff' d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z"/></svg>
          </div>
        <div>View Menu</div>
        </div>
        <div style={{marginTop:'15%',marginLeft:'10%'}}>
          <img src='/leaf3.png'/>
        </div>
        </div>
        </Grid>
        <Grid  item xs={12} md={4} lg={4}>
        <Box sx={{ flexGrow: 1}} >
      <Grid container>
      <Grid  item xs={12} md={12} lg={12}>
        <div style={{display:'flex'}}>
      <div  className='Card1'>
      <Card name='Daily' pic = "/daily.png"/>
      </div>
      <div className="card2">
      <Card name='Sessional' pic = "/sessional.png"/>
      </div>
      </div>
        </Grid>
        <Grid  item xs={12} md={12} lg={12}>
        <div style={{display:'flex'}}>
      <div  className='Card1'>
      <Card name='Catering' pic = "/catering.png"/>
      </div>
      <Card name='Special Menu' pic = "/special.png"/>
      </div>
        </Grid>
      </Grid>
    </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
