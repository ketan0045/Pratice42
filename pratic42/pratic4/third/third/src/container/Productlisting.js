import React, { useEffect } from "react";
import axios from "axios";
import { setaction } from "../redux/action/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetch51 } from "../redux/action/ProductAction";

const Productlisting = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.showallproduct.data70);
  console.log(data, "Productlisting");

  // const fetchdataapi = async () => {
  //   const respone = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((rtt) => {
  //       console.log("eroor", rtt);
  //     });
  //   dispatch(setaction(respone.data));
  // };

  useEffect(() => {
    dispatch(fetch51());
  }, []);

  return (
    <div style={{ marginTop: "60px" }}>
      {data.map((datassss) => {
        const { id, image, title, price, category } = datassss;
        return (
          <div key={id}>
            <div className="four column wide" style={{ marginTop: "40px" }}>
              <Link to={`/product/${id}`}>
                <div className="ui link card">
                  <div className="card">
                    <div className="image">
                      <img
                        src={image}
                        alt={title}
                        style={{ height: "180px", width: "110px" }}
                      />
                    </div>
                    <div className="content">
                      <div className="header">{title}</div>
                      <div className="meta price">${price}</div>
                      <div className="meta">{category}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Productlisting;
