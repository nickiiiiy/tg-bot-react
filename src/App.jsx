import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <Header />
      <h1>Hello</h1>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
