import axios from "axios";
import { API_URL } from "../consts";

const create = async (profileData) => {
  return axios.post(`${API_URL}/profiles/create`, profileData);
};

const saveExperience = async (expData) => {
  return axios.post(`${API_URL}/profiles/add_experience`, expData);
};

export default {
  create,
  saveExperience,
};
