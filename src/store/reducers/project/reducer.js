import { SUCCESS_PROJECT_AXIOS, FAILURE_PROJECT_AXIOS, ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT }  from '../actionNames';

const initialState = {
    projects : null,
    error : null,
    addProject : null,
    isError: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_PROJECT_AXIOS : {
            return {
                ...state,
                projects : action.payload
            }
        }
        case FAILURE_PROJECT_AXIOS : {
            return {
                ...state,
                error : action.payload,
                isError : true
            }
        }
        case ADD_PROJECT : {
            return {
                ...state,
                projects : [...state.projects,action.payload]
            }
        }
        case DELETE_PROJECT : {
            return {
            ...state,
            projects : state.projects.filter((item) => item._id !== action.payload._id)
            }
        }
        case UPDATE_PROJECT : {
            return {
                ...state,
                projects : state.projects.map((item) => (item._id === action.payload._id) ? action.payload
                : item)
            }
        }
        default : {
            return state
        }
    }
}