import { useState } from "react";
import PokemonCard from "./assets/components/PokemonCard";
import Button from "./assets/components/NavBar";
import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <Button
          pokemonIndex={pokemonIndex}
          setPokemonIndex={setPokemonIndex}
          pokemonLength={pokemonList.length - 1}
        />
      </div>
    </>
  );
}

export default App;
