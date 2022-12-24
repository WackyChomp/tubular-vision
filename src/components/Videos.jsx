import React from 'react';
import { Box, Stack } from '@mui/material';
import { VideoCard, ChannelCard } from './allComponents';

const Videos = ({ videos, direction }) => {

  if(!videos?.length) return 'Videos Loading......'

  console.log(videos);        // displays 50 elements based on fetchYouTubeAPI.js
  
  return (
    <Stack direction={ direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>

      {/* Each category will display both channel and video */}
      {videos.map((item, idx) =>(
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))};

    </Stack>
  );
}

export default Videos;