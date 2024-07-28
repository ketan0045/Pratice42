import { combineReducers } from 'redux';
import {productreducer,selectproductreducer} from "../reducer/ProductReducer"

const rootReducer = combineReducers({
    allproducts:productreducer,
    product:selectproductreducer
})   
export default rootReducer;