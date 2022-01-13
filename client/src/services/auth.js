import axios from "axios";
import { API_URL } from "../consts";

const login = async (userData) => {
  return axios.post(`${API_URL}/users/login`, userData);
};

const signIn = async (userData) => {
  return axios.post(`${API_URL}/users/register`, userData);
};

// The cleanup is done directly in header
// const logout = () => {
//   localStorage.removeItem("jwtToken");
// };

export default {
  login,
  signIn,
  // logout,
};
