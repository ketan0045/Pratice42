import "./App.css";
import Header from "./container/Header";
import ProDetail from "./container/ProDetail";
import ProListing from "./container/ProListing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProListing />} />
        <Route path="/product/:productId" element={<ProDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
