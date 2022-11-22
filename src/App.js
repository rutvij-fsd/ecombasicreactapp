import { ProductArea, Navbar, AddProduct, ProductDetailPage } from "./Component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductArea/>}/>
          <Route path="/addProduct" element={<AddProduct/>}/>
          <Route path="/product/:id" element={<ProductDetailPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
