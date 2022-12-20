import GifsContext from "../context/GifsContext";
import {useContext} from "react";	


export function useGlobalGifs () {
    const {gifs} = useContext(GifsContext);
    return gifs;
}