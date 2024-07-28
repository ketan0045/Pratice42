// import React from "react";
// import {Link  } from "react-router-dom";
// import { useSelector } from "react-redux";

// const ProductComponent = () => {
//   const products = useSelector((state) => state.allproducts.products);

//   const renderlist = products.map((producthere) => {
//     const { id, title, image, price, category } = producthere;
//     return (
//       <div key={id}>
//         <div className="four column wide"  style={{ marginTop: "40px" }}>
//          <Link to={`/product/${id}`}>
//           <div className="ui link card">
//             <div className="card">
//               <div className="image" >
//                 <img src={image} alt={title} style={{ height: "180px",width:"110px"}}/>
//               </div>
//               <div className="content">
//                 <div className="header">{title}</div>
//                 <div className="meta price">${price}</div>
//                 <div className="meta">{category}</div>
//               </div>
//             </div>
//           </div>
//           </Link>
//         </div>
//       </div>
//     );
//   });
//   return <> {renderlist} </>;
// };

// export default ProductComponent;


// src/components/ProductComponent.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const [loading, setloading] = useState(true);
  const { products, searchTerm } = useSelector((state) => state.allProducts);
  
  // Filter products based on searchTerm
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Map over the filtered products to create the product list
  const renderList = filteredProducts.length > 0 ? 
  filteredProducts.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }): "No found";

  return <>{loading ? renderList : "LLLLLL"}</>;
};

export default ProductComponent;





// import React from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const ProductComponent = () => {
//   const {products,searchTerm} = useSelector((state) => state.allProducts.products);

//   const filteredProducts = products.filter(product =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const renderList = products.map((product) => {
//     const { id, title, image, price, category } = product;
//     return (
//       // <div className="four wide column" key={id}>
//       //   <Link to={`/product/${id}`}>
//       //     <div className="ui link cards">
//       //       <div className="card">
//       //         <div className="image">
//       //           <img src={image} alt={title} />
//       //         </div>
//       //         <div className="content">
//       //           <div className="header">{title}</div>
//       //           <div className="meta price">$ {price}</div>
//       //           <div className="meta">{category}</div>
//       //         </div>
//       //       </div>
//       //     </div>
//       //   </Link>
//       // </div>
   

// {filteredProducts.map(product => (
//   <div className="four wide column" key={id}>
//   <Link to={`/product/${id}`}>
//     <div className="ui link cards">
//       <div className="card">
//         <div className="image">
//           <img src={image} alt={title} />
//         </div>
//         <div className="content">
//           <div className="header">{title}</div>
//           <div className="meta price">$ {price}</div>
//           <div className="meta">{category}</div>
//         </div>
//       </div>
//     </div>
//   </Link>
// </div>
// ))}
//     );
//   });
//   return <>{renderList}</>;
// };

// export default ProductComponent;

