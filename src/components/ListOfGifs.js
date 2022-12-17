import { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";


export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then(gifs =>{ 
      setGifs(gifs)
      setLoading(false);
    
    });

  }, [keyword]);

  if (loading) return <i>Cargando...🌀</i>;


  return ( 
  <div>
    {
    gifs.map(({ id, title, url }) =>
    <Gif key={id} id={id} title={title} url={url} />)
    }
  </div>)



}
