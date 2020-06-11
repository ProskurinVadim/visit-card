import { SUCCESS_SKILL_AXIOS, FAILURE_SKILL_AXIOS, ADD_SKILL, DELETE_SKILL, UPDATE_SKILL } from '../actionNames';
import API from "../../../api";

const successAxios = payload => {
    return {
        type : SUCCESS_SKILL_AXIOS,
        payload,
    }
};

const failureAxios = payload => {
    return {
        type : FAILURE_SKILL_AXIOS,
        payload,
    }
};

const addInformation = payload => {
    return {
        type : ADD_SKILL,
        payload,
    }
};

const updateInformation = payload => {
    return {
        type: UPDATE_SKILL,
        payload,
    }
};

const deleteInformation = payload => {
        return {
        type : DELETE_SKILL,
        payload
    }
};

export const addSkill= (data) => {
    console.log(data)
    return dispatch => {
        API.addSkill({...data})
            .then(({data}) => dispatch(addInformation(data.result)))
            .catch(error => dispatch(failureAxios(error)))
    }
};

export const getSkills = () => {
    return dispatch => {
        API.getAllSkills()
            .then(({data}) => dispatch(successAxios(data.result)))
            .catch(error => dispatch(failureAxios(error)))
    }
};

export const deleteSkill = (id) => {
    return dispatch => {
        API.deleteSkill(id)
            .then(() => {
                dispatch(deleteInformation({_id : id}))
            })
            .catch(error => dispatch(failureAxios(error)))
    }
};

export const updateSkill = (id,data) => {
    return dispatch => {
        API.updateSkill(id,data)
            .then(() => dispatch(updateInformation({...data,_id : id})))
            .catch(error => dispatch(failureAxios(error)))
    }
};