import axios from "axios"

const API = "http://localhost:5000/api/user";

export const createUser = async(data) => {
    const result = await axios.post(`${API}/register`, data);
    return result.data;
} 

export const loginUser = async(data) => {
    const result = await axios.post(`${API}/login`, data);
    return result.data;
}

export const getdoctors = async() => {
    const result = await axios.get(`${API}/doctors`);
    return result.data;
}

export const searchdoctor = async(name) => {
    const result = await axios.get(`${API}/searchdoctor/${name}`);
    return result.data;
}