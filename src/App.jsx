import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Service from "./pages/Services";
import Price from "./pages/Price";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Service />} />
        <Route path="/" element={<Price />} />
      </Routes>
      <Header />
    </BrowserRouter>
  );
}

export default App;
