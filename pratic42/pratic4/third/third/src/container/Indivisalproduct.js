import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectaction,
  removeselectaction,
} from "../redux/action/ProductAction";
import { fetch52 } from "../redux/action/ProductAction";

const Indivisalproduct = () => {
  const { itemI } = useParams();
  console.log(itemI);

  const seconddata = useSelector((state) => state.secondreducer.data41);
  console.log(seconddata, "seconddatamalya");

  const { title, image, price, category, description } = seconddata;
  const dispatch = useDispatch();


  // const indivisualdata = async (itemI) => {
  //   const record = await axios
  //     .get(`https://fakestoreapi.com/products/${itemI}`)
  //     .catch((bugging) => {
  //       console.log(bugging, "eeee");
  //     });  
  //   dispatch(selectaction(record.data));
  // };


  useEffect(() => {
    if ((itemI && itemI !== "", "check")) dispatch(fetch52(itemI))
    return () => {
      console.log("indivisal component effext");
      dispatch(removeselectaction());
    };
  }, [itemI]);

  return (
    <div className="ui grid container">
      {Object.keys(seconddata).length === 0 ? (
        <div style={{ marginTop: "70px" }}>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Indivisalproduct;
