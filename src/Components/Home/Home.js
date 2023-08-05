import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";




function Home(props) {
  return (
    <div className={styles.ten} >
      <div className={styles.innerBox}>
        <div>
        <h1>
          <Link to="/login">LOGIN</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">SIGNUP</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />
      <h2> {props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
     </div>
    </div>
  );
}

export default Home;