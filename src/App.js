import "./styles.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/gif/gatito">Gatos</Link>
        <Link to="/gif/beluga">Belugas</Link>
        <Link to="/gif/fox">Zorros</Link>
        
        <Route path="/gif/:keyword" component={ListOfGifs} />
        
      </section>
    </div>
  );
}
