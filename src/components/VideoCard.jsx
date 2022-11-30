import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from './utils/constants';


const VideoCard = ({ video:{ id:{videoId}, snippet } }) => {    // destructured
  //console.log(video)
  //console.log(videoId, snippet);
  
  return (
    <Card sx={{ width: {sm:'100%', md:'320px'}, boxShadow:'none', borderRadius:0 }}>
      {/* Thumbnail */}      
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url} 
          alt={snippet?.title}
          sx={{ width:'350px', height:'180px' }}  
        />
      </Link>
      
      {/* Video Description */}
      <CardContent sx={{ backgroundColor:'darkgreen', height:'100px' }} > 
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='palevioletred'>
            {snippet?.title.slice(0,60) ||
            demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight='bold' color='yellow'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontsize:12, color:'lightblue', ml:'5px'}} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard;