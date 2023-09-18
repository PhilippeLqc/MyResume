import react from "react";
import styles from "../styles/Companies.module.css";

function Companies() {
  return (
    <div className={styles.companiesmain}>
      <h1>Companies I worked for</h1>
      <p>I'll always be thankfull for the opportunities they offer. </p>
      <div className={styles.companies}>
        <img src="/images/cmsoLogo.png" alt="cmso Arkea" />
        <img src="/images/AumaxpourmoiLogo.png" alt="Aumax Pour moi Arkea" />
        <img src="/images/deolanLogo.png" alt="Deolan airplatform data" />
      </div>
    </div>
  );
}

export default Companies;
