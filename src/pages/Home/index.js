import { useState } from "react";
import { Link, useLocation } from "wouter";



const POPULAR_GIFS = ["Belugas", "Zorros", "Gatos"];

const Home = () => {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();

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
            </form>
            <h3 className="App-title">Los gifs más populares</h3>

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