import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers"

export const history = createBrowserHistory();
const store = createStore(
    rootReducer(history),
    undefined,
    applyMiddleware(
        routerMiddleware(history),
        thunk
    ),
);

export default store