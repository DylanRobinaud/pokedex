import React from "react";

function Button({ pokemonList, click }) {
  return (
    <div className="buttons">
      {pokemonList.map((pokemonList, index) => {
        return (
          <button
            className="button"
            key={pokemonList.name}
            onClick={() => click(index)}
          >
            {pokemonList.name}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
