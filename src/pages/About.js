import { Link } from "react-router-dom";
import styles from "../assets/css/about.module.css";

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About</h1>
      <p className={styles.par}>
        I made this app strictly to practice using React routing (hence the
        name) and to practice deploying an app made with React on Netlify.
      </p>
      <p className={styles.par}>Also I love Pokémon.</p>

      <p className={styles.par}>
        Made with ♥️ by{"  "}
        <a
          href="https://github.com/Hekimianz"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          Aram Hekimian
        </a>
      </p>
      <Link className={styles.homeLink} to="/">
        Go back home
      </Link>
    </div>
  );
}

export default About;
