import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Home from "./pages";
import Detail from "./pages/detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
