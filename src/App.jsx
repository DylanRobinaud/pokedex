import { useState, useEffect } from "react";
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
  const handleclick = (index) => {
    if (pokemonList[index].name === "pikachu") {
      alert("pika pikachu !!!");
    }
    setPokemonIndex(index);
  };

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  return (
    <>
      <div className="body">
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <Button
          pokemonList={pokemonList}
          pokemonIndex={pokemonIndex}
          click={handleclick}
          setPokemonIndex={setPokemonIndex}
        />
      </div>
    </>
  );
}

export default App;
