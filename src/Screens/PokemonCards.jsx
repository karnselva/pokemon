import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SkeletonCard from "../components/SkeletonCard";
import "./Pokemon.css"

const BASE_URL = "https://pokeapi.co/api/v2";
const PAGE_LIMIT = 20;

function PokemonCards() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageOffset, setPageOffset] = useState(0);
 

  useEffect(() => {
    fetchPokemonList();
  }, [pageOffset]);

  const fetchPokemonList = async () => {
    setIsLoading(true);
    const res = await axios.get(
      `${BASE_URL}/pokemon?offset=${pageOffset}&limit=${PAGE_LIMIT}`
    );
    setPokemonList([...pokemonList, ...res.data.results]);
    setIsLoading(false);
  };

  const handleLoadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setPageOffset(pageOffset + PAGE_LIMIT);
    }, 2000);
    
  };

  return (
    <div className="container">
      <h1>Pokemon List</h1>
      {!isLoading ?
      <ul className="pokemon-list">
        {pokemonList.map((pokemon,index) => (
         
          <li
            
            className="pokemon-list-item" key={index} >
           <Link to={`/pokemon/${pokemon.name}`}>
            <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`}
            alt={pokemon.name} className="pokemon-list-item-img"
          />
            <span className="pokemon-list-item-name">{pokemon.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      : <SkeletonCard/>}
      {!isLoading && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
     
    </div>
  );
}



export default PokemonCards;