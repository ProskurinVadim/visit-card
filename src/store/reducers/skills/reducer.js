import { SUCCESS_SKILL_AXIOS, FAILURE_SKILL_AXIOS, ADD_SKILL, DELETE_SKILL, UPDATE_SKILL } from '../actionNames';

const initialState = {
    skills : null,
    error : null,
    addSkill : null,
    isError: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_SKILL_AXIOS : {
            return {
                ...state,
                skills : action.payload
            }
        }
        case FAILURE_SKILL_AXIOS : {
            return {
                ...state,
                error : action.payload,
                isError : true
            }
        }
        case ADD_SKILL : {
            return {
                ...state,
                skills : [...state.skills,action.payload]
            }
        }
        case DELETE_SKILL : {
            return {
                ...state,
                skills : state.skills.filter((item) => item._id !== action.payload._id)
            }
        }
        case UPDATE_SKILL : {
            console.log(action);
            const updateSkills = state.skills.map((item) => (item._id === action.payload._id) ? action.payload : item);
            return {
                ...state,
                skills : updateSkills
            }
        }
        default : {
            return state
        }
    }
}