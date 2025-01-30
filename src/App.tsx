import { useState } from "react";
import "./App.css";
import "./assets/cat-animations.css";
import { Cat } from "./components/Cat";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="app">
      <Cat />
    </div>
  );
}

export default App;
