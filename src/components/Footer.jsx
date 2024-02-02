import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box style={{ backgroundColor: "#000000", color: "white"}} p={3} className="footer-border">
      <Typography variant="caption" align="center" display="block" gutterBottom>
        Hecho con mucho ❤ por Marcela Duran
      </Typography>
    </Box>
  );
}

export default Footer;
