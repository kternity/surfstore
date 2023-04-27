import { useEffect, useState } from 'react';
import Product from "../components/product";
import DataService from '../services/dataservice';
import "./catalog.css";

function Catalog() {
   const [products, setProducts] = useState([]);
   // const [categories, setCategories] = useState([]);
   // const [prodsToDisplay, setProdsToDisplay] = useState([]);
   // const products = []

   // when the component loads, do somthing
   useEffect(function (){
      loadData();
   }, []);

   async function loadData() {
      console.log("catalog loaded");
      let service = new DataService();
      let prodList = await service.getCatalog();
      setProducts(prodList);
   }

//    function loadCatalog() {
//       // get the products from the service
//       let service = new DataService();
//       let prods = service.getProducts();
//       console.log(prods);  
//       setProducts(prods); // put the result into the state variable
//       setProdsToDisplay(prods);

//       // todo: move this to a service
//       let cats = ["Short", "Medium", "Long" ];
//       setCategories(cats);
//    }

// function filter(category){
//    let list = [];
//    // find the products that matches the category and add it to the list

//    for(let i=0; i< products.length; i++) {
//       let prod = products[i];
//       if(prod.category === category) {
//          list.push(prod);
//       }
//    }

//    setProdsToDisplay(list);
// }

// function clearFilter() {
//    setProdsToDisplay(products);
// }

   return (
      <div className="catalog">
         <h3>Ken & Lea's Surfboard Store</h3>
         <h5>We have {products.length} latest surfboards for you!</h5>
        
        <div className="products">
         { products.map( prod => <Product data={prod} /> ) }
         </div>
      </div>
   );
}

export default Catalog;