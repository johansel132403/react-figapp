import { useEffect, useState } from "react"
import {getGif} from '../Helpers/GifHelper';


export const useFechtG = (nameProp) => {

    const [datos, setDatos] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
            //estamos llamando a esta funcion desde aqui y el proposito del hook user es para que nada mas se ejecute una vez
        getGif(nameProp)
           .then((img) => {

            
                    
                    setDatos({
                        data:img,
                        loading:false
                    })
           })
        // se le pone esta propiedad para cuando haiga un cambio en nameProp no se ejecute otra vez 
    },[nameProp]);




 return datos;

}