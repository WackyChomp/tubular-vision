import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from './utils/constants';

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box
    sx={{
      boxShadow:'none',
      borderRadius:'20px',
    }}
    >
      <Link to={`channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'orange'}}>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius:'50%', height:'150px', width:'150px', mb:2, border:'3px solid lightgreen'}}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontsize:12, color:'lightblue', ml:'5px'}} />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard