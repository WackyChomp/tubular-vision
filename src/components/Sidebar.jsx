import React from 'react';
import { Stack } from '@mui/material';
import { categories } from './utils/constants';

//const selectedCategory = 'Home';

const Categories = ( selectedCategory, setSelectedCategory) => {
  return (
    <Stack
    direction='row'
    sx={{ overflowY:'auto', 
      height:{ sx:'auto', md:'95%'},
      flexDirection:{ md:'column' }}}
    >
      {categories.map((category)=> (
        <button
        className='category-btn'
        style={{
          background: category.name === selectedCategory && '#1965d4', 
          color: 'white'
        }}
        key={ category.name }
        onClick={ () => setSelectedCategory(category.name) }
        >
          <span style={{ color: category.name === selectedCategory ? 'white' : 'green', marginRight: '15px'}}>{category.icon}</span>
          <span style={{ opacity: category.name === selectedCategory ? '1' : '0.4 '}}>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Categories