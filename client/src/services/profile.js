import axios from "axios";
import { API_URL } from "../consts";

const create = async (profileData) => {
  return axios.post(`${API_URL}/profile/create`, profileData);
};

export default {
  create,
};
