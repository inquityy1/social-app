import axios from "axios";
import { API_URL } from "../consts";

const create = async (profileData) => {
  return axios.post(`${API_URL}/profiles/create`, profileData);
};

const saveExperience = async (expData) => {
  return axios.post(`${API_URL}/profiles/add_experience`, expData)
}

const saveEducation = async (educationData) => {
  return axios.post(`${API_URL}/profiles/add_education`, educationData)
}

export default {
  create,
  saveExperience,
  saveEducation
};
