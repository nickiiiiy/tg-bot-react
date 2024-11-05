import { useEffect } from "react";
import Header from "./components/Header";
import { useTelegram } from "./components/hooks/useTelegaram";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import Form from "./components/Form";
import "./App.css";

function App() {
  const { onClose, tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
