
import Home from '../src/pages/Home'
import ProductList from '../src/pages/ProductList'
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import Product from '../src/pages/Product'
import Cart from './pages/Cart'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  let user = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route
          path="/login"
          element={user ? <Login /> : <Navigate to="/" replace />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;