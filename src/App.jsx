import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { useTelegram } from "./components/hooks/useTelegaram";

function App() {
  const { onClose, tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
