import CryptoJS from 'crypto-js'

const timeStamp = new Date().getTime()
const public_api_key = 'd0ff978e5afae35b61afcc60ee2ddcaa'
const private_api_key = '80c1c100a09102f383dd2a0e0c489d401708cf69'

const hash = CryptoJS.MD5(
    timeStamp + private_api_key + public_api_key
).toString();


export const reqCharacters = async (pagina, personaje = '') =>{
    const offset = (pagina -1)*20
    let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}`;
  personaje !== null && personaje !== ""
    ? (url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}&nameStartsWith=${personaje}`)
    : null;

    const resp = await fetch(url)
    const {data} = await resp.json()
    console.log(data)
    return data
  }