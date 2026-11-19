import axios from "axios"

const API = "http://localhost:5000/api/app";

export const createSlot = async(data) => {
    const result = await axios.post(`${API}/add`, data);
    return result.data;
} 

export const getschedule = async(doctor, date) => {
    const result = await axios.get(`${API}/schedule/${doctor}/${date}`);
    return result.data;
}

export const getSlot = async(doctor, date) => {
    const result = await axios.get(`${API}/getslot/${doctor}/${date}`);
    return result.data;
}

export const bookApp = async(id, data) => {
    const result = await axios.put(`${API}/book/${id}`, data);
    return result.data;
}

export const pHistory = async(patient) => {
    const result = await axios.get(`${API}/history/${patient}`);
    return result.data;
};

export const cancelApp = async(id) => {
    const result = await axios.put(`${API}/cancel/${id}`);
    return result.data;
};