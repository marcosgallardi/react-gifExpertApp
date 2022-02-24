import React, {useState} from "react";

    
    export const AddCategory = ({setCategorias}) => {

        const [InputValue, setInputValue] = useState (" ")

        const handleInputChange = (e) => {

            setInputValue (e.target.value);

        };
        
        const handleSubmit = (e) =>{

            e.preventDefault();

            if (InputValue.trim().length > 2){

                setCategorias(cats => [ InputValue, ...cats]);
                setInputValue (" ");

            }

            
        };
        
            

        return (
         <>
           <form onSubmit={handleSubmit}>
           <input
                type="text"
                value={InputValue}
                onChange={ handleInputChange }
                />
           </form>

              </>
            )
    };
              
        



               
                
    