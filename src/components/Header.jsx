import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate()

  return (
    <AppBar position="static" style={{backgroundColor:"#000000"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "red",
              textDecoration: "none",
            }}
          >
            Makoflix
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <Button key="home"
                sx={{ my: 2, color: "white", display: "block" }}>
              <MenuItem onClick={() => navigate("/")}>
                <Typography variant='subtitle2' textAlign="center">Home</Typography>
              </MenuItem>
            </Button>
            <Button key="new-movies"
                sx={{ my: 2, color: "white", display: "block" }}>
              <MenuItem onClick={() => navigate("/new-movies")}>
                <Typography variant='subtitle2' textAlign="center">New Movies</Typography>
              </MenuItem>
            </Button>
            <Button key="popular"
                sx={{ my: 2, color: "white", display: "block" }}>
              <MenuItem onClick={() => navigate("/popular")}>
                <Typography variant='subtitle2' textAlign="center">Popular</Typography>
              </MenuItem>
            </Button>
            <Button key="search"
                sx={{ my: 2, color: "white", display: "block" }}>
              <MenuItem onClick={() => navigate("/search")}>
                <Typography variant='subtitle2' textAlign="center">Search</Typography>
              </MenuItem>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

