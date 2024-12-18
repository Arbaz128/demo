import * as React from 'react';
import LhsLanding from './lhsLanding'
import RhsLanding from './rhsLanding'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor:'#F5F9FF' }} >
      <Grid container>
        <Grid item xs={12} md={7} lg={7} >
        <RhsLanding/>
        </Grid>
        <Grid  item xs={12} md={5} lg={5}>
        <LhsLanding/>
        </Grid>
      </Grid>
    </Box>
  );
}
