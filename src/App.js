import logo from "./assets/logo.png";
import styles from "./assets/css/app.module.css";

function App() {
  return (
    <header className={styles.container}>
      <img src={logo} alt="logo" />
      <p>App in development by Aram Hekimian</p>
    </header>
  );
}

export default App;
