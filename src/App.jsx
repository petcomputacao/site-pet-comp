import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import Membros from "./pages/Membros";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path="/membros" element={<Membros />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;