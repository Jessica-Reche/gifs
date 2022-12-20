import "./styles.css";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Details from "./pages/Details";

export default function App() {
  return (
    <div className="App">

      <section className="App-content">
    <Link to="/">
    <img className="App-logo" src="https://i.ibb.co/kB9NKn8/logo.png" alt="logo" />
    </Link>
    <Route component={Home} path="/"/>
    <Route component={SearchResults}  path="/search/:keyword" />
     <Route path="/gif/:id" component={Details} />
      </section>
    </div>
  );
}
