import { useCharacters } from "../hooks/useCharacters"
import { GridCharacters } from "./GridCharacters";
import { BuscarCharacter } from "./BuscarCharacter";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from "react";

export const MarvelApp = () =>{
const [pagina, setPagina] = useState()
const [personaje, setPersonaje] = useState('')
const {characters, total} = useCharacters(pagina, personaje)

const handleSearch = (character) => {
  setPersonaje(character)
}
  return(
    <>
    
      <BuscarCharacter handleSearch={handleSearch}/>
      <GridCharacters characters={characters} />
      <Pagination count={Math.round(total/20)} className='d-flex justify-content-center' onChange={(e, value)=>(setPagina(value))}/>
    </>

  )
}