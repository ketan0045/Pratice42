import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProComponent = () => {
  const products = useSelector((state) => state.allproducts.products);
  const renderdata = products.map((apidata) => {
    const { id, title, image, price, category } = apidata;
    return (
      <div key={id}>
        <div className="four column wide" style={{ marginTop: "10px" }}>
          <Link to={`/product/${id}`}>
            <div className="ui link card">
              <div className="card">
                <div className="image">
                  <img  src={image} alt={title} style={{ height: "180px", width: "110px" }} />               
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
  });
  console.log(renderdata, "renderdata ProComponent");

  return <div> {renderdata}</div>;
};

export default ProComponent;
