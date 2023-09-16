import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import styles from "../styles/PersonnalProjects.module.css";
import {
  faCameraRetro,
  faScrewdriverWrench,
  faComment,
  faCode,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

function PersonnalProjects() {
  const iconstyle = { color: "white", marginRight: "3%" };
  const wipstyle = { color: "black", marginRight: "3%" };
  const projects = [
    {
      icon: faCameraRetro,
      title: "Photography website",
      description:
        "Personnal website to show my photography work. Also I want to work hard on minimalist style.",
      wipicon: faScrewdriverWrench,
      status: "Got the idea",
    },
    {
      icon: faComment,
      title: "Act'up",
      description:
        "App for actors and actresses to share their work and connect with other people.",
      wipicon: faCode,
      status: "Work in progress",
    },
    {
      icon: faSeedling,
      title: "Help me grow",
      description: "App to help people to take care of their plants.",
      wipicon: faCode,
      status: "Work in progress",
    },
  ];
  return (
    <div className={styles.main}>
      <h1>Personnal project I work on</h1>
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
                  <CardMedia>
                    <div className={styles.cardmedia}>
                      <FontAwesomeIcon icon={project.icon} style={iconstyle} />
                      <p>{project.title}</p>
                    </div>
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <div className={styles.cardContent}>
                      <p>{project.description}</p>
                      <div className={styles.workstatus}>
                        <FontAwesomeIcon
                          icon={project.wipicon}
                          style={wipstyle}
                        />
                        <p>{project.status}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default PersonnalProjects;
