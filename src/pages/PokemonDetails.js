import { useParams } from "react-router-dom";

function PokemonDetails({ data }) {
  const { name } = useParams();
  const [pokemon] = data.filter((poke) => poke.name === name);
  return (
    <div>
      <img src={pokemon.sprite} alt={pokemon.name} />
    </div>
  );
}

export default PokemonDetails;
