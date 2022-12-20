import "./styles.css";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Details from "./pages/Details";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";


export default function App() {
  return (
    <StaticContext.Provider  value={{nombre: 'Jessi', actividad_terminada: true}}>
    <div className="App">

      <section className="App-content">
          <Link to="/">
           <img className="App-logo" src="https://i.ibb.co/kB9NKn8/logo.png" alt="logo" />
           </Link>
            <GifsContextProvider>
           <Route component={Home} path="/"/>
           <Route component={SearchResults}  path="/search/:keyword" />
           <Route path="/gif/:id" component={Details} />
            </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  );
}
