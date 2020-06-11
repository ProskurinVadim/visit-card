import  { SUCCESS_PROJECT_AXIOS, FAILURE_PROJECT_AXIOS, ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from '../actionNames';
import API from "../../../api";

const successAxios = payload => {
    return {
        type : SUCCESS_PROJECT_AXIOS,
        payload,
    }
};

const failureAxios = payload => {
    return {
        type : FAILURE_PROJECT_AXIOS,
        payload,
    }
};

const addInformation = payload => {
    return {
        type : ADD_PROJECT,
        payload,
    }
};

const updateInformation = payload => {
    return {
        type: UPDATE_PROJECT,
        payload,
    }
};

const deleteInformation = payload => {
    return {
        type : DELETE_PROJECT,
        payload
    }
};

export const addProject = (data) => {
    return dispatch => {
        API.addProject({...data})
            .then(({data}) => dispatch(addInformation(data.result)))
            .catch(error => dispatch(failureAxios(error)))
    }
};

export const getProjects = () => {
    return dispatch => {
        API.getAllProjects()
            .then(({data}) => dispatch(successAxios(data.result)))
            .catch(error => dispatch(failureAxios(error)))
    }
};

export const deleteProject = (id) => {
    return dispatch => {
        API.deleteProject(id)
            .then(() => {
                dispatch(deleteInformation({_id : id}))
            })
            .catch(error => dispatch(failureAxios(error)))
    }
};

export const updateProject = (id,data) => {
    return dispatch => {
        API.updateProject(id,data)
            .then(() => dispatch(updateInformation({...data,_id : id})))
            .catch(error => dispatch(failureAxios(error)))
    }
};