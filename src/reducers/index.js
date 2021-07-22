  
import { combineReducers } from "redux";
import ModalReducer from "./modal";

const rootReducer = combineReducers({
  modals: ModalReducer
});

export default rootReducer;