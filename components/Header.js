import react from "react";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <h1>Fullstack developper junior, frontend enthusiast</h1>
          <p>Enjoy to code, eager to learn, happy to share</p>
          <img src="/images/portrait.png" alt="my portrait" />
        </div>
        <div className={styles.headerIcon}>
          <img src="/images/computerDrawing.png" alt="computer drawing" />
        </div>
      </div>
      <div className={styles.headerPresentation}>
        <h2>Hi, I'm Philippe, glad to meet you.</h2>
        <p>
          I wanted to take a turn on my journey and decided to go through a
          bootcamp to become a fullstack developper. I'm now looking to evolve
          as a junior developper. After searching my way, I found that I really
          enjoy frontend and want to learn web design. I'm eager to learn and
          happy to share. I'm looking for a company where I can grow and improve
          my skills.
        </p>
      </div>
    </div>
  );
}

export default Header;
