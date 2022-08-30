import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { bannerReducer } from "./Reducers/CarouselReducer";
const rootReducers = combineReducers({
  // khai báo các reducer
  bannerReducer,
});
export const store = createStore(rootReducers, applyMiddleware(thunk));
