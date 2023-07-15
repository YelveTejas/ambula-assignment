import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box w='full' display='flex' bg='cyan' padding='10px' justifyContent='space-around'  >
        <Link to='/'>
            <Text>Home</Text>
          </Link>
          <Link to='/todo'>
            <Text>Todo</Text>
          </Link>
          <Link to='/about'>
            <Text>About</Text>
          </Link>
          <Link to='/contact'>
            <Text>contact</Text>
          </Link>
          <Link to='/cart'>
            <Text>cart Section</Text>
          </Link>
        </Box>
    </div>
  )
}

export default Navbar