import PropTypes from "prop-types";

function Button({ pokemonIndex, setPokemonIndex, pokemonLength }) {
  return (
    <div className="buttons">
      {pokemonIndex > 0 ? (
        <button
          className="button"
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
          className="button"
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

Button.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.number.isRequired,
  pokemonLength: PropTypes.number.isRequired,
};

export default Button;
