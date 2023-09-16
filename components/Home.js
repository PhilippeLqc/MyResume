import styles from "../styles/Home.module.css";
import React from "react";
import Companies from "./Companies";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import PersonnalProjects from "./PersonnalProjects";

function Home() {
  return (
    <div>
      <Header />
      <Skills />
      <Projects />
      <PersonnalProjects />
      <Companies />
      <Footer />
    </div>
  );
}

export default Home;
