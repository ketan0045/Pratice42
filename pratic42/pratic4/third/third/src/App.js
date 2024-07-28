import "./App.css";
import Header from "./container/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Indivisalproduct from "./container/Indivisalproduct";
import Productlisting from "./container/Productlisting";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Productlisting />} />
          <Route path="/product/:itemI" element={<Indivisalproduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
