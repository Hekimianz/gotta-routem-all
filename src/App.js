import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./assets/css/app.module.css";
import Home from "./pages/Home";
import About from "./pages/About";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    async function getData() {
      const finalData = [];
      for (
        let i = page === 50 ? 1001 : page * 20 + 1;
        i <= (page === 50 ? 1017 : page * 20 + 20);
        i++
      ) {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then((response) => response.json())
          .then((final) => {
            finalData.push({
              name: formatName(final.name),
              type: getTypes(final),
              number: final.id,
              sprite: final.sprites["front_default"],
            });
          });
      }
      setData(finalData);
    }
    getData();
  }, [page]);

  // Format pokemons name
  const formatName = (name) => {
    const firstLetter = name.split("")[0].toUpperCase();
    const restOfWord = name.split("").slice(1).join("");
    const result = firstLetter + restOfWord;
    return result;
  };

  // Get all types from pokemon
  const getTypes = (pokemon) => {
    const data = pokemon.types.map((type) => {
      return type.type.name;
    });
    return data;
  };

  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<Home data={data} pageSetter={setPage} currentPage={page} />}
        />
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
