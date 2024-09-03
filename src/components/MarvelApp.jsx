import React from 'react'
import CryptoJS from 'crypto-js'
import  { useState} from 'react'
import { useEffect } from 'react'

export const MarvelApp = () => {
    const[characters, setCharacters] = useState()

    const time_stamp = new Date().getTime()
    const private_api_key = '80c1c100a09102f383dd2a0e0c489d401708cf69'
    const public_api_key = 'd0ff978e5afae35b61afcc60ee2ddcaa'

    const hash = CryptoJS.MSD(time_stamp + private_api_key + public_api_key).toString();

    useEffect(()=> {
        const reqCharacters = async() => {
            const resp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}`)
            const {data} = await resp.json()
    
            setCharacters(data.results)
            console.log(characters)
        }
    
        reqCharacters()
    }, [])

    console.log(characters);


  return (
    <>

    
    </>
  )
}
