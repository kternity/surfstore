import './App.css';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import Admin from './pages/admin';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notFound';
import Cart from './pages/cart';
import GlobalData from './store/globalData';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import {BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <GlobalData>
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={ <Home />}></Route>
          <Route path="/home" element={ <Home />}></Route>

          <Route path="/catalog" element={ <Catalog />}></Route>
          <Route path="/admin" element={ <Admin />}></Route>
          <Route path="/about" element={ <About />}></Route>
          <Route path="/cart" element={ <Cart />}></Route>
          
          <Route path="*" element={ <NotFound />}> </Route>
        </Routes>
        
        <Footer></Footer>
      </div>
    </BrowserRouter>
    </GlobalData>

  );
}

export default App;


// TESTING Commment