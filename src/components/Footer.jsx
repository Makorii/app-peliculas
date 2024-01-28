import { Box, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box style={{backgroundColor:"#000000", color:"white"}} p={3}>
      <Typography variant='caption' align='center' display="block" gutterBottom>Hecho con mucho ❤ por Marcela Duran</Typography>
    </Box>
  )
}

export default Footer