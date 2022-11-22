import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './allComponents';


const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx:'column', md:'row' } }}>
      <Box sx={{ height: { sx:'auto', md:'92vh'}, 
      borderRight:'2px solid yellow', 
      px:{ sx:0, md:2}}}>

        <Sidebar />
        
        <Typography className='copyright' variant='body2'
        sx={{ mt:1.5, color: '#fff' }}  >
          Copyright 2022 Tubular Vision
        </Typography>
      </Box>

      <Box
      p={2}j
      sx={{ overflowY:'auto', height:'90vh', flex:2 }}
      >
        <Typography
        variant='h4' fontWeight='bold' mb={2}
        sx={{ color:'white' }}
        >
          Homepage <span style={{ color:'yellow' }}>Videos</span>
        </Typography>

        <Videos video={[]}/>
      </Box>
    </Stack>
  )
}


export default Feed