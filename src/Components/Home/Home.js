import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home(props) {
  return (
    <div>
      <nav className={styles.navbar}>
        <h1 className={styles.navbarHeading}>Authentication Page</h1>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link to="/login" className={styles.navbarLink}>Login</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/signup" className={styles.navbarLink}>Signup</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.ten}>
        <div className={styles.innerBox}>
          <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
          <p>🎉</p>
          <hr className={styles.horizontalLine} />
          <div className={styles.buttonContainer}>
            <h1>
              <Link to="/login" className={`${styles.button} ${styles.hover}`}>LOGIN</Link>
            </h1>
            <h1>
              <Link to="/signup" className={`${styles.button} ${styles.hover}`}>SIGNUP</Link>
            </h1>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>made with ❤️ by <a href="https://github.com/Pranaam19" target="_blank" rel="noopener noreferrer">PRANAAM</a></p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/Pranaam19" target="_blank" rel="noopener noreferrer">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" width="32" height="32" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
