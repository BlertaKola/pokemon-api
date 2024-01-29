import { useEffect, useState } from "react";
import axios
 from "axios";

const PokemonApi = () => {
    const [reponseData, setResponseData] = useState([])
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const callPokemon = () => {
        setHasBeenSubmitted(true)
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
        .then(res => setResponseData(res.data.results) )
        .catch(err => console.log(err))

    }

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(res => setResponseData(res.data.results) )
        .catch(err => console.log(err))
    }, [])


    return (
        <>
        {/* <button onClick={callPokemon}>Call Pokemon</button> */}
        {reponseData.map((pokemon,index)=>{
            return( <p key={index}> {pokemon.name}</p>)
        })}
        </>
    )
}

export default PokemonApi;