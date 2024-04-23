import { useState } from "react";
import "./App.css";
import "./assets/components/MyTitle";
import MyTitle from "./assets/components/MyTitle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <MyTitle />
      </div>
    </>
  );
}

export default App;
