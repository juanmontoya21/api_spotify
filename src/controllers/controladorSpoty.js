// RECETA PARA CONSUMIR

//1. PA DONDE VAS OME
//URI  DEL API
const URI='https://api.spotify.com/v1/artists/60gdbqqzpBp5bOGNoLnkYG/top-tracks?market=US'

//2 A HACER QUE OME?
//metodo
const PETICION={
    method:'GET',
    headers:{
        Authorization:'Bearer BQCISQPYw-yGTu31OJ1xSlltEK321LhLjapIdhCo0MsiEg1rPhjGaZJvk7r-pjVP0Q6G3h6vDpIQKlf-KZsZpakEEmHoRoMf8RfIvuT6Ms1cg767KZUtrvfZjSHyOR3pQ2olBm9AR2Q4s-DEp4YIAkNkQzaEv-TXk6m6j2bR8GCWRbr2rwErwLuMamt-yD7kSY8'
    }
} 

//3.ANDATE PUES OME
//CONSUMA ELAPI(UTILIZANDO PROMESAS)
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuetaError){
    console.log(respuetaError)
})