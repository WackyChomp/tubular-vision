import React, {useState, useEffect }from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { fetchYoutubeAPI } from './utils/fetchYoutubeAPI';


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchYoutubeAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
  }, [id]);


  if(!videoDetail?.snippet) return 'Loading......'      /* sometimes snippet doesn't have all the data b/c it hasn't loaded yet */

  // Destructuring
  const { snippet:{title}} = videoDetail;



  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs:'column', md:'row' }}>
        <Box flex={1}>
          <Box sx={{ width:'100%', position:'sticky', top:'80px' }}>
            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${id}`} 
              className="react-player" controls  
            />
            <Typography color='yellow' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail