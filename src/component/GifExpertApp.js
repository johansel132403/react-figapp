import React, { useState } from 'react';
import {Addcategory} from '../component/AddCategory';

import { GridGif } from '../component/GifGrid';




const SecondApp = ()=>{

    const [names,setCategory] = useState(['Dragon Ball']);

    const addAtTheCategory = () =>{

        let nombre = 'Johansel Perez';
        setCategory( [ nombre, ...names ] );
        
    }
    
    
    return (
        
        <>
            <h2>{"GifExpertApp"}</h2>

            <Addcategory setCategory={ setCategory } />

            <hr/>


            <button onClick= { addAtTheCategory } >Add</button>

            <ol>
                {
                    names.map( nameCategory=>{

                    return <GridGif 

                        key={nameCategory}
                        nameCategory={ nameCategory }  
                        
                        />

                    })
               
               }
            </ol>
        </>

    )


    

}

export default SecondApp;


