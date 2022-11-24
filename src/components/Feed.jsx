import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './allComponents';
import { fetchYoutubeAPI } from './utils/fetchYoutubeAPI';


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('Dynamic');


  useEffect (() => {
    fetchYoutubeAPI(`search?part=snippet&q=${selectedCategory}`)
  }, [selectedCategory]);


  return (
    <Stack sx={{ flexDirection: { sx:'column', md:'row' } }}>
      <Box sx={{ height: { sx:'auto', md:'92vh'}, 
      borderRight:'2px solid yellow', 
      px:{ sx:0, md:2}}}>

        <Sidebar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
        
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
          {selectedCategory} <span style={{ color:'yellow' }}>Videos</span>
        </Typography>

      </Box>
    </Stack>
  )
}


export default Feed