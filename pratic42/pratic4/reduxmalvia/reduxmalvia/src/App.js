import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./container/Header";
import ProductListing from "./container/ProductListing";
import ProductDetail from "./container/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
