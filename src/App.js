import "./styles.css";
import ListOfGifs from "./components/ListOfGifs";

export default function App() {


  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword="witch" />
      </section>
    </div>
  );
}
