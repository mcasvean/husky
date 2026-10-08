import Pokemon from "./Pokemon";
import usePokemon from "./usePokemon";

function PokemonList() {
  const {
    pokemons,
    pokemonCount,
    loadMoreRef,
    load,
  } = usePokemon();

  return (
    <>
      <h5 className="sticky">This is the Pokemon list ({pokemons.length}/{pokemonCount})</h5>
      {pokemons?.length && pokemons.map(({ name, url }) => {
        return (
          <Pokemon
            key={name}
            name={name}
            pokemonDetailsUrl={url}
          />
        );
      })}
      {load && <div className="scroll-loader"><span></span></div>}
      <div className="scroll-trigger" ref={loadMoreRef} />
    </>
  );
}

export default PokemonList;
