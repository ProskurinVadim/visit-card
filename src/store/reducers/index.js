import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import { reducer as formReducer } from "redux-form";
import projectReducer from "./project/reducer";
import skillReducer from "./skills/reducer";
import libraryReducer from "./library/reducer";
const rootReducer = (history) => combineReducers({
    router : connectRouter(history),
    form : formReducer,
    project : projectReducer,
    skill : skillReducer,
    library : libraryReducer,
});

export default rootReducer;