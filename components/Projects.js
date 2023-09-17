import React from "react";
import styles from "../styles/Projects.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, CardActions, Link } from "@mui/material";

function Projects() {
  const projects = [
    {
      image: "/images/arianeLogo.png",
      title: "Ariane",
      description:
        "App made for connecting people via family. Create a family tree.",
      youtube: "https://t.ly/08nD",
      link: "",
      GitHub: "https://t.ly/awbE",
    },
    {
      image: "/images/MyMoviz.png",
      title: "Mymoviz",
      description: "Website that collects info from TMDB API.",
      youtube: "",
      link: "https://t.ly/2-g5A",
      GitHub: "https://t.ly/S4fDL",
    },
    {
      image: "/images/computerDrawing.png",
      title: "myResume",
      description:
        "Made this website from scratch to practice and show what I can do.",
      youtube: "",
      link: "https://my-resume-brown.vercel.app/",
      GitHub: "https://github.com/PhilippeLqc/MyResume",
    },
  ];

  return (
    <div className={styles.main}>
      <h1>Some projects I worked on</h1>
      <div className={styles.cardContainer}>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    alt={project.title}
                    height="180"
                    image={project.image}
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <p>{project.title}</p>
                    <p>{project.description}</p>
                  </CardContent>
                  <CardActions className={styles.cardActions}>
                    <Link
                      href={
                        project.link === "" ? project.youtube : project.link
                      }
                      underline="none"
                      target="_blank"
                    >
                      <Button size="small" className={styles.button}>
                        {project.link === "" ? "See Demo" : "Visit website"}
                      </Button>
                    </Link>
                    <Link
                      href={project.GitHub}
                      underline="none"
                      target="_blank"
                    >
                      <Button size="small" className={styles.button}>
                        See GitHub
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Projects;
