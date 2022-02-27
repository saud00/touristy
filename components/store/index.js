import { createStore, combineReducers } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import HotelReducers from "./reducers/HotelReducers";

const root = combineReducers({HotelReducers,}) ;

const store = createStore( root )

export default store