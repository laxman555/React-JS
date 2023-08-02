import axios from "axios";
import {IProduct} from "../Types/IProduct";

export const getProducts = () => {
    let products: any;
    // let products:any;
    axios.get('https://fakestoreapi.com/products')
    .then(function (response) {
      // handle success
      products = response.data;
      console.log(products);
      return products;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return products;
    })
    .finally(function () {
      // always executed
    //   return products;

    return products;
    
    });

    
}

