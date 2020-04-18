import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./user/reducers";
import { contactReducer } from "./contacts/reducers";

const rootReducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
