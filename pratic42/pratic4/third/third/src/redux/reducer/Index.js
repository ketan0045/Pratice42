import { combineReducers } from 'redux'
import { setproductreducer,selectproductreducer} from "./Allreducer";

const rootReducer = combineReducers({
  showallproduct: setproductreducer,
  secondreducer: selectproductreducer,
});

export default rootReducer;