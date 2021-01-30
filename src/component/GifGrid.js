import React from 'react';
import { useFechtG } from '../hooks/useFechtGift';
//import { getGif } from '../Helpers/GifHelper';
import { ItemGrif } from './ItemGifGrid';



export const GridGif = ({ nameCategory }) => {

         //esto tambien era parte del primer ejemplo...
                       //EN ESTE COMPONENTE BORRAMOS(useState,useEffect) los hooks para hacer lo de nosotros 

    // const [ img, setImg ] = useState([]);
    
    
   
    // useEffect(() => {
                                       //este fue el primer ejemplo ante de usar el custom hooks
    //     getGif(nameCategory)
    //          .then((img)=>{
    //             setImg(img)
    //          })
    // }, [nameCategory]);   
    
    const { data ,loading }  = useFechtG(nameCategory)



    
   
    
    return (

        <>
           <h2>{nameCategory}</h2>

        
               { loading ? 'Cargando...':'Datos Cargados'}
              
            <div className="card-grid">
                
                {
                    data.map( resImg =>(
                    <ItemGrif 
                    
                    //aqui estamos enviado 2 cosas el key y las propiedades...
                    key={resImg.id}
                        //con esto aqui puedo hacer facilmente la desectruturacion ya que le pasa todos los item que tiene resImg...    
                    {...resImg}
                    
                    />
                    ))
                }
                
            </div>
        </>

    )
}