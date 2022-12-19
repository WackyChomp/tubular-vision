import React, {useState, useEffect }from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { fetchYoutubeAPI } from './utils/fetchYoutubeAPI';


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchYoutubeAPI(`videos?part=snippet,statistics&id${id}`)
      .then((data) => setVideoDetail(data.items[0]))
  }, [id]);


  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs:'column', md:'row' }}>
        <Box flex={1}>
          <Box sx={{ width:'100%', position:'sticky', top:'80px' }}>
            <ReactPlayer 
              url={`https://youtube.com/watch?v=${id}`} 
              className="react-player" controls  
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail