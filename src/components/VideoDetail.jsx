import React, {useState, useEffect }from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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
  const { snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount} } = videoDetail;


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
            <Stack direction='row' justifyContent='space-between' sx={{color:'black'}} py={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm:'subtitle1', md:'h6'}} color='blue'>
                  {channelTitle}
                  <CheckCircleIcon sx={ {fontSize:'12px', color:'pink', ml:'5px'}} />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.6 }}>
                  {parseInt(viewCount).toLocaleString()} views :O
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.6 }}>
                  {parseInt(likeCount).toLocaleString()} likes :O
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail