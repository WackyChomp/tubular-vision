import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './allComponents';
import { useParams } from 'react-router-dom';
import { fetchYoutubeAPI } from './utils/fetchYoutubeAPI';


const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();       /* useState from SearchBar component */

  useEffect (() => {
    fetchYoutubeAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  }, [searchTerm]);


  return (
    <Box
    p={2}j
    sx={{ overflowY:'auto', height:'90vh', flex:2 }}
    >
      <Typography
      variant='h4' fontWeight='bold' mb={2}
      sx={{ color:'cyan' }}
      >
        Search Results for: <span style={{ color:'yellow' }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={ videos } />
    </Box>
  )
}

export default SearchFeed