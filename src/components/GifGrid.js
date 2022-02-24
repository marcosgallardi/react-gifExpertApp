import { useEffect, useState } from "react";
import React  from 'react';
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({category}) => {


const { data, loading } = useFetchGifs ( category );
 
  return (

<>
    
   <h3 className="animate__animated animate__fadeInDown"> {category} </h3>
  
   { loading && <p className="animate__animated animate__flash">Cargando</p> }
   
  <div className="card-grid">
    {
      data.map(imgs =>(
        <GifGridItem
        key={imgs.id}
        { ...imgs }
        />
  
  
      ))

    }



  </div>
   </>
  )
  }
