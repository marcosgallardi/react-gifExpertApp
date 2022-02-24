import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import PropTypes from "prop-types";
import { GifGrid } from './components/GifGrid';




 export const GifExpertApp = () => { 
    
   

    const [categorias, setCategorias] = useState(["Rick And Morty"]);

   
    

     return (
         <>
        <h2 className='animate__animated animate__bounceInDown'>GifExpertApp</h2>
        <AddCategory setCategorias={setCategorias} />
        <hr />

        <ol> { 
            
                categorias.map(category => (

                    
                    <GifGrid
                    key = {category}
                    category = {category} />

                ))
            
            };
        </ol>
        
         </>
         )
}
          




         


AddCategory.propTypes = {

    setCategorias: PropTypes.func.isRequired
        
    }

    

       




