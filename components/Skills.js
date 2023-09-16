import react from "react";
import styles from "../styles/Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faGraduationCap,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function Skills() {
  const style = { color: "#047DB0", "margin-top": "3%" };
  return (
    <div className={styles.mainSkills}>
      <div className={styles.softskills}>
        <FontAwesomeIcon icon={faUsers} size="3x" style={style} />
        <h2>Who I am</h2>
        <div className={styles.content}>
          <div>
            <h3>My personality</h3>
            <p>
              Fast learner, teamwork, communication, adaptability, curiosity,
              integrity, autonomy, agile
            </p>
          </div>
          <div>
            <h3>WHat I want to learn</h3>
            <p>Python, Java, Angular, VueJs, Flutter, Kotlin</p>
          </div>
        </div>
      </div>
      <div className={styles.hardskills}>
        <FontAwesomeIcon icon={faLaptopCode} size="3x" style={style} />
        <h2>I like to code from scratch</h2>
        <div className={styles.content}>
          <div>
            <h3>Langage I speak</h3>
            <p>HTML, CSS, Javascript</p>
          </div>
          <div>
            <h3>Frameworks I know</h3>
            <p>React, React Native, NextJs, NodeJs, ExpressJs</p>
          </div>
          <div>
            <h3>Dev tools I use</h3>
            <p>Git, GitHub, VSCode, Slack, Discord</p>
          </div>
        </div>
      </div>
      <div className={styles.diplomas}>
        <FontAwesomeIcon icon={faGraduationCap} size="3x" style={style} />
        <h2>My education</h2>
        <div className={styles.content}>
          <div>
            <h3>
              Over the years, I have acquired skills which I am proud of today
            </h3>
            <p>
              2023 - {""}
              <span style={{ fontWeight: "bold" }}>
                RNCP de niveau 6 Concepteur Développeur d'application web et
                mobile
              </span>{" "}
              - La Capsule Bordeaux
            </p>
            <p>
              2011 -{" "}
              <span style={{ fontWeight: "bold" }}>
                Licence Sciences du Langage
              </span>{" "}
              - Université Nancy II
            </p>
            <p>
              2008 -{" "}
              <span style={{ fontWeight: "bold" }}>
                Bacalauréat Scientifique spécialité Physique Chimie
              </span>{" "}
              - Lycée Jacques Callot
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
