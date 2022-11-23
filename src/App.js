import { ProductArea, Navbar, AddProduct, ProductDetailPage, CartContainer, Checkout } from "./Component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <Router>
      <ToastContainer />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductArea/>}/>
          <Route path="/addProduct" element={<AddProduct/>}/>
          <Route path="/product/:id" element={<ProductDetailPage/>} />
          <Route path="/cart" element={<CartContainer/>} />
          <Route path="/orderplaced" element={<Checkout/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
