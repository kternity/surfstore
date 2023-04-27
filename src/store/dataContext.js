//Interface

import { createContext } from "react";

// Interface, promise, blueprints
// Should not have any values or implementations
// just describe the structure of the data

const DataContext = createContext({
   cart: [],
   user: {},
   //functions
   addProductsToCart: () => {},
   removeProductsFromCart: () => {},
});

export default DataContext;

