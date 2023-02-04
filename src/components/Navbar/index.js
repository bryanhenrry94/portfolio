import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppleIcon from "@mui/icons-material/Apple";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ArticleIcon from "@mui/icons-material/Article";
import EngineeringIcon from "@mui/icons-material/Engineering";

const pages = [
  {
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    title: "About",
    icon: <PersonIcon />,
  },
  {
    title: "Service",
    icon: <EngineeringIcon />,
  },
  {
    title: "Works",
    icon: <WorkIcon />,
  },
  {
    title: "Blog",
    icon: <ArticleIcon />,
  },
  {
    title: "Contact",
    icon: <ContactMailIcon />,
  },
];

const index = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "transparent" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <AppleIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Raleway,sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#cd5ff8",
              textDecoration: "none",
              fontStyle: "italic",
            }}
          >
            Bryan.dev
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
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: { md: "2" } }} />
          <AppleIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Raleway,sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#cd5ff8",
              textDecoration: "none",
              fontStyle: "italic",
            }}
          >
            BN.dev
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              flexDirection: { xs: "row" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  "&:hover": {
                    borderBottom: "5px solid #cd5ff8",
                  },
                }}
                startIcon={page.icon}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default index;
