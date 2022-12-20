
import Gif from '../../components/Gif';
import { useGlobalGifs } from '../../hooks/useGlobal';



const Details = ({params}) => {

    const gifs = useGlobalGifs();
    console.log({gifs});
    const gif = gifs.find(singleGif => singleGif.id === params.id);
    console.log({gif});




  return (
    
    <Gif {...gif} />
  )
}

export default Details;
