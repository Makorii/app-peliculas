import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';


const pages = ['Home', 'New Movies', 'Popular', 'Favorites'];


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const navigate = useNavigate()
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" style={{backgroundColor:"#000000"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            href="#app-bar-with-responsive-menu"
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

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "red",
              textDecoration: "none",
            }}
          >
            Makoflix
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
            <Button key="favorites"
                sx={{ my: 2, color: "white", display: "block" }}>
              <MenuItem onClick={() => navigate("/favorites")}>
                <Typography variant='subtitle2' textAlign="center">Favorites</Typography>
              </MenuItem>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <MenuItem key="Search" onClick={() => navigate("/search")}>
              <Typography textAlign="center">Search</Typography>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;