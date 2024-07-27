import logo from './logo.svg';
import './App.css';
import Product from './components/Products'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import NavBar from './components/NavBar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App container mx-auto">
          <NavBar/>
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route exact path="/" element={<Product />} />
              <Route path="/buy-used-cars" element={<Product />} />
              <Route path="/buy-used-cars/:slug" element={<ProductDetails />} />
          </Routes>
    </div>
  );
}

export default App;
