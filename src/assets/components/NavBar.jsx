function Button({ pokemonIndex, setPokemonIndex, pokemonLength }) {
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button
          onClick={() => {
            setPokemonIndex(pokemonIndex - 1);
          }}
        >
          Précédent
        </button>
      ) : (
        ""
      )}
      {pokemonIndex < pokemonLength - 1 ? (
        <button
          onClick={() => {
            setPokemonIndex(pokemonIndex + 1);
          }}
        >
          Suivant
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Button;
