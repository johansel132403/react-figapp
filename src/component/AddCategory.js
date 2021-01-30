import React, { useState } from 'react';

import PropTypes from "prop-types"

export const Addcategory = ( {setCategory} )=>{


    const [inputValue, setInputValue] = useState("");

    const inputFunction = (e) =>{

        setInputValue( e.target.value )

    }

    const secongFunction = (e) =>{
           e.preventDefault();

           if( inputValue.trim().length > 2){
               setCategory( call => [ inputValue,...call   ])
               setInputValue("")
           }
           
        
    }




    return (
       
        <form onSubmit={ secongFunction }>
            <input
               type='text'
               value={inputValue}
               onChange={ inputFunction }
            />
        </form>
    )
}

Addcategory.propTypes ={

    setCategory: PropTypes.func.isRequired

}