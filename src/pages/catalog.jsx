import { useEffect, useState } from 'react';
import Product from "../components/product";
import DataService from '../services/dataservice';
import "./catalog.css";

function Catalog() {
   const [products, setProducts] = useState([]);
   // const products = []

   // when the component loads, do somthing
   useEffect(function (){
      console.log("component loaded");
      loadCatalog();
   }, []);

   function loadCatalog() {
      // get the products from the service
      let service = new DataService();
      let prods = service.getProducts();
      console.log(prods);  
      setProducts(prods); // put the result into the state variable
   }

   function magicTest() {
      console.log("Behold, the magic!!");
      setProducts([]); // clears the arraay
   }

   return (
      <div className="catalog">
         <h1>Ken & Lea's Surfboard Store</h1>
            <h5>We have {products.length} latest surfboards for you!</h5>
            <button onClick={magicTest}className="btn btn-danger">Reset</button>
            <br />

            {products.map( p => <Product data={p}></Product> )}
      </div>
   );
}

export default Catalog;