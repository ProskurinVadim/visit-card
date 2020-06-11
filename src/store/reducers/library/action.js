import  { SUCCESS_LIBRARY_AXIOS, FAILURE_LIBRARY_AXIOS, ADD_LIBRARY, DELETE_LIBRARY, UPDATE_LIBRARY } from '../actionNames';
import API from "../../../api";

const successAxios = payload => {
    return {
        type : SUCCESS_LIBRARY_AXIOS,
        payload,
    }
};

const failureAxios = payload => {
    return {
        type : FAILURE_LIBRARY_AXIOS,
        payload,
    }
};

const addInformation = payload => {
    return {
        type : ADD_LIBRARY,
        payload,
    }
};

const updateInformation = payload => {
    return {
        type: UPDATE_LIBRARY,
        payload,
    }
};

const deleteInformation = payload => {
    return {
        type : DELETE_LIBRARY,
        payload
    }
};

export const addLibrary = (data) => {
    console.log(data)
    return dispatch => {
        API.addLibrary({...data})
            .then(({data}) => dispatch(addInformation(data.result)))
            .catch(error => dispatch(failureAxios(error)))
    }
};

export const getLibraries = () => {
    return dispatch => {
        API.getAllLibraries()
            .then(({data}) => dispatch(successAxios(data.result)))
            .catch(error => dispatch(failureAxios(error)))
    }
};

export const deleteLibrary = (id) => {
    return dispatch => {
        API.deleteLibrary(id)
            .then(() => {
                dispatch(deleteInformation({_id : id}))
            })
            .catch(error => dispatch(failureAxios(error)))
    }
};

export const updateLibrary = (id,data) => {
    return dispatch => {
        API.updateLibrary(id,data)
            .then(() => dispatch(updateInformation({...data,_id : id})))
            .catch(error => dispatch(failureAxios(error)))
    }
};