import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import styles from "./assets/css/app.module.css";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </>
    )
  );
  return (
    <div className={styles.container}>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
