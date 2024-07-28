// import React, { useEffect } from "react";
// import {useSelector, useDispatch} from 'react-redux'
// import axios from "axios";
// import {setproducts} from "../redux/actions/productAction"
// import ProductComponent from "./ProductComponent";

// const ProductListing = () => {
//   const products = useSelector((state) => state);
//   const dispatch = useDispatch()

//   const fetchProducts = async () => {
//     const response = await axios
//       .get("https://fakestoreapi.com/products")
//       .catch((err) => {
//         console.log("err", err);
//       });
//       dispatch(setproducts(response.data));
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [])

//   console.log(products,"Products ProductListing");
//   return (
//     <div className="ui grid container">
//       <ProductComponent />
//     </div>
//   );
// };

// export default ProductListing;

import React, { useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// 2222.......import { setProducts } from "../redux/actions/productsActions";
import { setProducts, fetchProducts } from "../redux/actions/productAction";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  // thunk
  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("Products 111111110000000000000:", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;

// https://redux.js.org/tutorials/fundamentals/part-6-async-logic#configuring-the-store


