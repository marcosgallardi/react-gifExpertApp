import react from "react";
import { GifGrid } from "./GifGrid";

export const GifGridItem = ({ title, url }) => {
    

return (

    <div className="card animate__animated animate__fadeInDown">

        <img src={url} />
        <p> {title} </p>


    </div>
)

}
