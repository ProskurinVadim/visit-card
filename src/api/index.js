import axios from "axios"

const baseUrl = 'http://localhost:5000';

export default {
    getAllProjects() {
        return axios.get(`${baseUrl}/projects`)
    },
    deleteProject(id) {
        return axios.delete(`${baseUrl}/projects/${id}`)
    },
    updateProject(id,body) {
        return axios.put(`${baseUrl}/projects/${id}`,body)
    },
    addProject(body) {
        return axios.post(`${baseUrl}/projects`,body)
    },

    getAllSkills() {
        return axios.get(`${baseUrl}/skills`)
    },
    deleteSkill(id) {
        return axios.delete(`${baseUrl}/skills/${id}`)
    },
    updateSkill(id,body) {
        return axios.put(`${baseUrl}/skills/${id}`,body)
    },
    addSkill(body) {
        return axios.post(`${baseUrl}/skills`,body)
    },

    getAllLibraries() {
        return axios.get(`${baseUrl}/library`)
    },
    deleteLibrary(id) {
        return axios.delete(`${baseUrl}/library/${id}`)
    },
    updateLibrary(id,body) {
        return axios.put(`${baseUrl}/library/${id}`,body)
    },
    addLibrary(body) {
        return axios.post(`${baseUrl}/library`,body)
    },

};

