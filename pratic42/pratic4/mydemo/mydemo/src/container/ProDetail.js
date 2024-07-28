// import React, { useEffect } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { selectproductAction } from "../redux/action/ProductAction";

// const ProDetail = () => {
//   const { itemI } = useParams();
//   console.log(itemI);

//   const product = useSelector((state) => state.product);
//   console.log(product, "ProDetailProDetailProDetail  ");

//   const { title, image, price, category, description } = product;
//   const dispatch = useDispatch();

//   const fetchdata = async (id) => {
//     const res = await axios
//       .get(`https://fakestoreapi.com/products/${id}`)
//       .catch((bug) => {
//         console.log(bug, "bug");
//       });
//     dispatch(selectproductAction(res.data));
//   };

//   useEffect(() => {
//     if (itemI && itemI !== "") fetchdata(itemI);
//     // console.log( fetchdata(itemI,"eeeee"))
//   }, []);

//   return (
//     <div className="ui grid container">
//     {console.log(Object.keys(product), "keys to obj")}

//     {Object.keys(product).length === 0 ? (
//       <div>...Loading</div>
//     ) : (
//       <div className="ui placeholder segment">
//         <div className="ui two column stackable center aligned grid">
//           <div className="ui vertical divider">AND</div>
//           <div className="middle aligned row">
//             <div className="column lp">
//               <img className="ui fluid image" src={image} />
//             </div>
//             <div className="column rp">
//               <h1>{title}</h1>
//               <h2>
//                 <a className="ui teal tag label">${price}</a>
//               </h2>
//               <h3 className="ui brown block header">{category}</h3>
//               <p>{description}</p>
//               <div className="ui vertical animated button" tabIndex="0">
//                 <div className="hidden content">
//                   <i className="shop icon"></i>
//                 </div>
//                 <div className="visible content">Add to Cart</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )}
//   </div>
  
//   );
// };

// export default ProDetail;


import React, { useEffect } from "react";
import axios from "axios";
import { selectproductAction,removeproductAtion} from "../redux/action/ProductAction";
import { useParams } from "react-router-dom";
import { fechings2 } from "../redux/action/ProductAction";

import { useDispatch, useSelector } from "react-redux";

function ProductDetail() {

  const { productId } = useParams();
  console.log(productId);

  let product = useSelector((state) => state.product);
  console.log("first", product);

  const { title, image, price, category, description } = product;

  const dispatch = useDispatch();

  // const fetchProductDetail = async (id) => {
  //   const response = await axios
  //     .get(`https://fakestoreapi.com/products/${id}`)
  //     .catch((errore) => {
  //       console.log(errore, "errore");
  //     });
  //   dispatch(selectproductAction(response.data));
   
  // };
  

  useEffect(() => {
    if (productId && productId !== "") dispatch(fechings2(productId));

    return(()=>{
      dispatch(removeproductAtion());
    })
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
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
}

export default ProductDetail;
