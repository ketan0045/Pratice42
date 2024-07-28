// import React from "react";

// const Header = () => {
//   return (
//     <div className="ui fixed menu">
//       <div className="ui container center">
//         <h1>ProductShop</h1>
//       </div>
//     </div>
//   );
// };

// export default Header;

// thunk

import React from "react";
import { useDispatch } from 'react-redux';
import { setSearchTerm } from "../redux/actions/productAction";

const Header = () => {
  const dispatch = useDispatch();

  const handleChangefunc = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>ProductShop</h2>
      </div>
      <div className="ui container center">
        <input
          type="search"
          placeholder="Search item"
          onChange={handleChangefunc}
          className="searchbar"
        />
      </div>
    </div>
  );
};

export default Header;
