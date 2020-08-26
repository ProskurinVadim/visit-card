import  { SUCCESS_LIBRARY_AXIOS, FAILURE_LIBRARY_AXIOS, ADD_LIBRARY, DELETE_LIBRARY, UPDATE_LIBRARY } from '../actionNames';

const initialState = {
    libraries : null,
    error : null,
    addProject : null,
    isError: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_LIBRARY_AXIOS : {
            return {
                ...state,
                libraries : action.payload
            }
        }
        case FAILURE_LIBRARY_AXIOS : {
            return {
                ...state,
                error : action.payload,
                isError : true
            }
        }
        case ADD_LIBRARY : {
            return {
                ...state,
                libraries : [...state.libraries,action.payload]
            }
        }
        case DELETE_LIBRARY : {
            return {
                ...state,
                libraries : state.libraries.filter((item) => item._id !== action.payload._id)
            }
        }
        case UPDATE_LIBRARY : {
            return {
                ...state,
                libraries : state.libraries.map((item) => (item._id === action.payload._id) ? action.payload
                    : item)
            }
        }
        default : {
            return state
        }
    }
}