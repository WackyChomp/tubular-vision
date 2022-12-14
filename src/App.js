import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';        // div element
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from './components/allComponents';

const App = () => {
  return (
    <BrowserRouter>
        <Box sx={{ backgroundColor: 'crimson'}}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" exact element={<VideoDetail />} />
            <Route path="/channel/:id" exact element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
          </Routes>
        </Box>
    </BrowserRouter>
  )
}

export default App