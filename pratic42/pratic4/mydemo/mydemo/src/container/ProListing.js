import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProComponent from "./ProComponent";
import { productAction } from "../redux/action/ProductAction";
import { fechings } from "../redux/action/ProductAction";

const ProListing = () => {
  const products = useSelector((state) => state);
  console.log(products,"ProListing");
  const dispatch = useDispatch();

  // const fecthdata = async () => {
  //   const res = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  //   dispatch(productAction(res.data, "apidata"));
  // };

  useEffect(() => {
    dispatch(fechings());
  }, []);

  return (
     <div className="ui grid container" style={{ marginTop: "70px" }}>
       <ProComponent />
    </div>
  );
};

export default ProListing;
