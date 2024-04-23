import { useState } from "react";
import PokemonCard from "./assets/components/PokemonCard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <PokemonCard />
      </div>
    </>
  );
}

export default App;
