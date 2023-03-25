import React, { useState,useEffect } from "react";
import axios from "axios"

const PokemonApi = () => {
  const [state, setstate] = useState(1);
  const [name, setName] = useState();
  const [moves, setmoves] = useState();
  const [Status, setStatus] = useState();

  useEffect(() => {

    const pokemonData = async () =>{
        const resp = await axios.get(`https://pokeapi.co/api/v2/version/${state}`);
        console.log(resp)
        // console.log(resp.status)
        // console.log(resp.data.name)
        // console.log(resp.data.names.length)
        setmoves(resp.status)
        setName(resp.data.name)
        setStatus(resp.data.names.length)
    } 
    pokemonData();
  }, [state]);



  return (
    <>
      <div className="p-30 slc_poke">
        <select
          onChange={(e) => {
            setstate(e.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="10">10</option>
          <option value="19">19</option>
          <option value="31">31</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="21">21</option>
          <option value="35">35</option>
          <option value="6">6</option>
        </select>

        <h2>You choose the value of <span>{state}</span> </h2>
        <h3>Choose Pokemon Name is <span>{name}</span></h3>
        <h4>You have moves is <span>{moves}</span></h4>
        <h4>Your Choosen Status is <span>{Status}</span></h4>
      </div>
    </>
  );
};

export default PokemonApi;
