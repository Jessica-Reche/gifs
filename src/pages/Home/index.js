import './home.css';
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
const POPULAR_GIFS = ["Belugas", "Zorros", "Gatos"];

const Home = () => {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();
    const  {loading, gifs} = useGifs();


    //const {loading, gifs} = useGifs()
    const handleSubmit = evt =>{
        evt.preventDefault();
            //navegar a otra ruta
           pushLocation(`/search/${keyword}`);
    }
    const handleChange = evt =>{
        setKeyword(evt.target.value)

    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <input placeholder="Search a gif here..." onChange={handleChange} type="text" value={keyword} />
                <button> Buscar</button>
            </form>
            <h3 className="App-title">ÚLtima búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            <ul>
                {POPULAR_GIFS.map((gif) => (
                    <li key={gif}>
                        <Link to={`/search/${gif}`}>
                            Gifs de {gif}
                        </Link>
                    </li>

                ))}

            </ul>

        </>
    )
}

export default Home;