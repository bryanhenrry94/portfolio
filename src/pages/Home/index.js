import React from "react";
import Navbar from "@components/Navbar";
import {
  Container,
  Box,
  Typography,
  Grid,
  Stack,
  IconButton,
} from "@mui/material";
import DryIcon from "@mui/icons-material/Dry";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import HomeImage from "@assets/img/home.svg";
import AvatarImage from "@assets/img/avatar.svg";
import HomeBackground from "@assets/img/home-bg.jpg";

import Typical from "react-typical";
import { display } from "@mui/system";

const index = () => {
  return (
    <>
      <Navbar />
      <Box
        component="div"
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: `linear-gradient(to bottom left,rgba(17,16,16,0.678),rgba(12,10,22,0.863)),url(${HomeBackground})`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex" },
                  flexDirection: { xs: "column" },
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    mr: 2,
                    fontFamily: "Raleway,sans-serif",
                    fontWeight: "inherit",
                    fontSize: { xs: "1.2rem", md: "2.4rem" },
                    color: "#fff",
                    textDecoration: "none",
                    paddingBottom: "15px",
                    paddingLeft: "0.2rem",
                    margin: 0,
                    display: "block",
                    marginBlockStart: "0.83em",
                  }}
                >
                  Hi There!&nbsp;
                  <DryIcon />
                </Typography>
                <Box>
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      mr: 2,
                      fontFamily: "Raleway,sans-serif",
                      fontWeight: 100,
                      fontSize: { xs: "1.2rem", md: "2.4rem" },
                      letterSpacing: ".3rem",
                      color: "#FFF",
                      textDecoration: "none",
                      paddingBottom: "40px",
                    }}
                  >
                    I'M&nbsp;
                    <Typography
                      variant="span"
                      component="span"
                      sx={{
                        mr: 2,
                        fontFamily: "Raleway,sans-serif",
                        fontWeight: 400,
                        fontSize: { xs: "1.2rem", md: "2.4rem" },
                        letterSpacing: ".1rem",
                        color: "#cd5ff8",
                        textDecoration: "none",
                      }}
                    >
                      BRYAN NAVARRETE
                    </Typography>
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  component="h4"
                  href="/"
                  sx={{
                    mr: 2,
                    fontFamily: "Raleway,sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: "1.2rem", md: "2.4rem" },
                    letterSpacing: ".3rem",
                    color: "#cd5ff8",
                    textDecoration: "none",
                  }}
                >
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      "Full Stack Developer",
                      2000,
                      "Designer",
                      2000,
                      "Backend Developer",
                      2000,
                      "Fronted Developer",
                      2000,
                    ]}
                  />
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  alt="home-img"
                  src={HomeImage}
                  style={{ minWidth: "100px", minHeight: "200px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        component="div"
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid white",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={5}
          >
            <Grid item xs={12} md={8}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontFamily: "Raleway,sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "0.9rem", md: "1.2rem" },
                  letterSpacing: ".2rem",
                  color: "#fff",
                  textDecoration: "none",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                LET ME INTRODUCE MYSELF
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{
                  fontFamily: "Raleway,sans-serif",
                  fontWeight: 100,
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  letterSpacing: ".2rem",
                  color: "#fff",
                  textDecoration: "none",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                I fell in love with programming and I have at least learnt
                something, I think…
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{
                  mr: 2,
                  fontFamily: "Raleway,sans-serif",
                  fontWeight: 100,
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  letterSpacing: ".3rem",
                  color: "#fff",
                  textDecoration: "none",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                My field of Interest's are building new Web Technologies and
                Products
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{
                  mr: 2,
                  fontFamily: "Raleway,sans-serif",
                  fontWeight: 100,
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  letterSpacing: ".3rem",
                  color: "#fff",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                A passionate Full Stack Software Developer 🚀 I have an
                experience of building Web and Mobile applications with
                JavaScript, Reactjs, Nodejs, React Native and some other cool
                libraries
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: { md: "none", xs: "flex" },
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  alt="avatar-img"
                  src={AvatarImage}
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  alt="avatar-img"
                  src={AvatarImage}
                  style={{
                    height: "200px",
                    width: "200px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h5"
                  noWrap
                  component="h5"
                  sx={{
                    mr: 2,
                    fontFamily: "Raleway,sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: "0.8rem", md: "1rem" },
                    letterSpacing: ".2rem",
                    color: "#fff",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  FIND ME ON
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    mr: 2,
                    fontFamily: "Raleway,sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: "0.8rem", md: "1rem" },
                    letterSpacing: ".3rem",
                    color: "#fff",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  Feel free to connect with me
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton aria-label="Github" color="secondary">
                    <GitHubIcon />
                  </IconButton>
                  <IconButton aria-label="Facebook" color="secondary">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton aria-label="Email" color="secondary">
                    <SendIcon />
                  </IconButton>
                  <IconButton aria-label="LinkedIn" color="secondary">
                    <LinkedInIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default index;
