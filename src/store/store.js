import { createStore, combineReducers } from "redux";
import { Issues, popularRepos } from "./reducer";

const rootReducer = combineReducers({
  Issues,
  popularRepos,
});

export const store = createStore(rootReducer);
