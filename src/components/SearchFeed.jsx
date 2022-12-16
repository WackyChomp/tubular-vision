import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './allComponents';
import { fetchYoutubeAPI } from './utils/fetchYoutubeAPI';


const SearchFeed = () => {

  const [selectedCategory, setSelectedCategory] = useState('Dynamic');
  const [videos, setVideos] = useState([]);

  useEffect (() => {
    fetchYoutubeAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
  }, [selectedCategory]);


  return (
    <Box
    p={2}j
    sx={{ overflowY:'auto', height:'90vh', flex:2 }}
    >
      <Typography
      variant='h4' fontWeight='bold' mb={2}
      sx={{ color:'cyan' }}
      >
        {selectedCategory} <span style={{ color:'yellow' }}>Videos :)</span>
      </Typography>

      <Videos videos={ videos } />
    </Box>
  )
}

export default SearchFeed