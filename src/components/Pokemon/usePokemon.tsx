import { useState, useRef, useEffect } from "react";
import type { PokemonItem } from "./Pokemon";

function usePokemon() {
  const defaultApi = "https://pokeapi.co/api/v2/pokemon/";
  const [pokeapi, setPokeapi] = useState(defaultApi);
  const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
  const [pokemonCount, setPokemonCount] = useState(0);
  const [load, setLoad] = useState(false);
  const [loadMore, setLoadMore] = useState(true);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  async function getPokemons() {
    setLoad(true);

    try {
      const res = await fetch(pokeapi);
      const data = await res.json();
      setPokemons(prev => [...prev, ...data.results]);
      setPokemonCount(data.count);

      if (data.next) {
        setPokeapi(data.next);
      } else {
        setLoadMore(false);
      }
    } catch (err) {
      console.error('There is an error on fetching pokemon list: ', err);
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && loadMore) {
          getPokemons();
        }
      },
      {
        threshold: 0,
        rootMargin: "20px",
      }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [pokeapi, loadMore]);

  return {
    pokemons,
    pokemonCount,
    loadMoreRef,
    load,
  };
}

export default usePokemon;
