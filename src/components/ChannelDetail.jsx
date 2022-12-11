import React from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './allComponents';
import { useParams } from 'react-router-dom';
import { fetchYoutubeAPI } from './utils/fetchYoutubeAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const { id } = useParams();
  const [videos, setVideos] = useState([]);

  console.log(channelDetail, videos)

  useEffect(()=> {
    fetchYoutubeAPI(`channels?part="snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]))
    fetchYoutubeAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items[0]))
  }, [id])

  
  return (
    //<div>{id}</div>,
    <Box minHeight="95vh">
      <div
        style={{
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(64,102,143,1) 50%, rgba(0,212,255,1) 100%)",
          zIndex: 10,
          height: "300px"
        }}
      />
      <ChannelCard channelDetail={channelDetail} />
    </Box>
  )
}

export default ChannelDetail