import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import styles from "./assets/css/app.module.css";
import Home from "./pages/Home";
import About from "./pages/About";
import PokemonDetails from "./pages/PokemonDetails";
import data from "./assets/mockData";

function App() {
  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:name" element={<PokemonDetails data={data} />} />
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
