import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Paper
    component="form"
    onSubmit={() => {}}
    sx={{ borderRadius:20, border:'2px solid #1965d4', pl:2, boxShadow:'none', mr:{sm:5} }}
    >
      <input
      className='search-bar' placeholder='Searching......' value=''
      onChange={() => {}}
      />
      <IconButton type='submit' sx={{ p:'10px', color:'greenyellow'}}>
        <Search/>
      </IconButton>
    </Paper>
  )
}

export default SearchBar