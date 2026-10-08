import React, { useState, type ReactNode } from "react";
import "./Pokemon.css";

interface Props {
  children?: ReactNode;
  name: string;
  pokemonDetailsUrl: string;
};

export interface PokemonItem {
  name: string;
  url: string;
};

interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
};

interface Details {
  abilities: Ability[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  height: number;
  weight: number;
  id: number;
  is_default: boolean;
  name: string;
};

function Pokemon({ children, name, pokemonDetailsUrl }: Props) {
  const [details, setDetails] = useState<Details | null>(null);
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getDetails() {
    if (opened) return;

    try {
      setLoading(true);
      const res = await fetch(pokemonDetailsUrl);
      const data = await res.json();
      setDetails(data);
    } catch (err) {
      console.error('Error on fetching pokemon details: ', err);
    } finally {
      setLoading(false);
    }

    setOpened(prev => !prev);
  }

  const detailsContent = (
    <>
      <div>🥷 Abilities:
        {
          details?.abilities.map(({ ability: { name } }, index) => (
            <React.Fragment key={name}>
              <span> {name}{`${index < details.abilities.length - 1 ? ", " : ""}`}</span>
            </React.Fragment>
          ))
        }
      </div>
      <div>📏 Dimensions:
        <span>🪂 Height: {details?.height}" | ⚖️ Weight: {details?.weight}g</span>
      </div>
      <div>💪 Power: {details?.base_experience}</div>
    </>
  );

  const loadingContent = (
    <p className="loading">Loading... <span></span></p>
  );

  return (
    <>
      <div className="card">
        <h6><b>Name: </b>{name || "-"}</h6>
        <details open={opened} onClick={getDetails} className="card-details">
          {loading
            ? loadingContent
            : detailsContent
          }
        </details>
      </div>
      {children}
    </>
  );
}

export default Pokemon;
