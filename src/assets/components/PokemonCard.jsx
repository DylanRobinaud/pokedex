function PokemonCard({ pokemon }) {
  return (
    <figure className="card">
      {pokemon.imgSrc !== undefined ? (
        <img
          src={pokemon.imgSrc}
          alt="Cette image représente un Pokémon."
          className="card-img"
        />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
