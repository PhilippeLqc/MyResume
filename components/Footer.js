import React from "react";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const socialLinks = [
    { icon: faGithub, url: "https://github.com/PhilippeLqc" },
    { icon: faLinkedinIn, url: "https://www.linkedin.com/in/philippe-lqc" },
    { icon: faXTwitter, url: "https://twitter.com/pilipou" },
    { icon: faInstagram, url: "https://www.instagram.com/pilipoubdx/" },
    { icon: faEnvelope, url: "mailto:philippe.lequoc@gmail.com" },
  ];

  const iconstyle = { color: "white" };

  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.footermain}>
      <h1>Want to work together ?</h1>
      <div className={styles.button}>
        {socialLinks.map((link, index) => (
          <button key={index} onClick={() => handleButtonClick(link.url)}>
            <FontAwesomeIcon icon={link.icon} style={iconstyle} size="2x" />
          </button>
        ))}
      </div>
      <h4>© 2023 Philippe Le Quoc</h4>
    </div>
  );
}

export default Footer;
