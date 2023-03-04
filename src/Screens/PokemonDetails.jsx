import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BASE_URL = "https://pokeapi.co/api/v2";

export default function PokemonDetails() {

    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const {name}=useParams()

    useEffect(() => {
        handlePokemonClick();
      }, [name,BASE_URL]);

      
  const handlePokemonClick = async () => {
    const res = await axios.get(`${BASE_URL}/pokemon/${name}`);
    console.log(res)
    setSelectedPokemon(res.data);
  };


  return (
    <>
      { selectedPokemon && 
        <div className="pokemon-details">
          <h2>{selectedPokemon.name}</h2>
          <img
            className="pokemon-details-img"
            src={selectedPokemon.sprites.front_default}
            alt={selectedPokemon.name}
          />
          <p>Height: {selectedPokemon.height}</p>
          <p>Weight: {selectedPokemon.weight}</p>
          <p>Type: {selectedPokemon.types[0].type.name}</p>
        </div>
      }
    </>
  )
}
