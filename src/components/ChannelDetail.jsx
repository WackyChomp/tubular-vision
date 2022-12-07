import React from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './allComponents';
import { useParams } from 'react-router-dom';
import { fetchYoutubeAPI } from './utils/fetchYoutubeAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const { id } = useParams();

  console.log(channelDetail)

  useEffect(()=> {
    fetchYoutubeAPI(`channels?part="snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]))
  }, [id])

  
  return (
    <div>{id}</div>
  )
}

export default ChannelDetail