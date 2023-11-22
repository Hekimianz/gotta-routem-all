import styles from "./assets/css/app.module.css";
import Home from "./components/Home";

function App() {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
}

export default App;
