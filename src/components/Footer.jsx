import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from '@mui/material/Link';

const Footer = () => {
  const preventDefault = (event) => event.preventDefault();

  return (
    <Box
      style={{ backgroundColor: "#000000", color: "white" }}
      p={3}
      className="footer-border"
    >
      <Typography variant="caption" align="center" display="block" gutterBottom>
        Hecho con mucho ❤ por 
        <Link href="https://www.linkedin.com/in/marceduran/" target="_blank" rel="noopener" underline="none" sx={{color:"white", paddingLeft:"5px"}}>
          {"Marcela Duran"}
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
