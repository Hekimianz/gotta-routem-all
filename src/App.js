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
  const [rawData, setRawData] = useState([]);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const allUrl = "https://pokeapi.co/api/v2/pokemon?limit=1017&offset=0";

  const fetchRawData = async () => {
    const res = await fetch(allUrl);
    const d = await res.json();
    return setRawData(d.results);
  };

  const fetchData = () => {
    setData([]);
    rawData.slice(page * 20, page * 20 + 20).map(async (poke) => {
      const resp = await fetch(poke.url);
      const d = await resp.json();
      setData((prev) => [
        ...prev,
        {
          name: formatName(d.name),
          number: d.id,
          type: getTypes(d),
          sprite: d.sprites["front_default"],
          species: d.species.url,
          height: d.height,
          weight: d.weight,
          stats: {
            hp: d.stats[0]["base_stat"],
            attack: d.stats[1]["base_stat"],
            defense: d.stats[2]["base_stat"],
            spAttack: d.stats[3]["base_stat"],
            spDefense: d.stats[4]["base_stat"],
            speed: d.stats[5]["base_stat"],
          },
        },
      ]);
    });
  };

  useEffect(() => {
    fetchRawData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [rawData, page]);

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
      return formatName(type.type.name);
    });
    return data;
  };

  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <Home
              data={data}
              dataSetter={setData}
              pageSetter={setPage}
              currentPage={page}
              rawData={rawData}
              rawDataSetter={setRawData}
              fetchRawData={fetchRawData}
            />
          }
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
