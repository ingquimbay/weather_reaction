import { combineReducers } from "redux";
import weather from "./weatherReducer";

const roorReducer = combineReducers({
  weather: weather,
});

export default roorReducer;
