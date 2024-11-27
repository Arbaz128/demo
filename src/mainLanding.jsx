import * as React from 'react';
import LhsLanding from './lhsLanding'
import RhsLanding from './rhsLanding'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor:'#f8f9fc' }} >
      <Grid container>
        <Grid item xs={12} md={8} lg={8}>
        <RhsLanding/>
        </Grid>
        <Grid  item xs={12} md={4} lg={4}>
        <LhsLanding/>
        </Grid>
      </Grid>
    </Box>
  );
}
