import axios from "axios";
import { API_URL } from "../consts";

const login = async (userData) => {
  return axios.post(`${API_URL}/users/login`, userData);
  // try {
  //   const userResponse = await axios.post(`${API_URL}/users/login`, userData)

  //   if (!userResponse) {s
  //     throw new Error("Wrong credentials");
  //   }

  //   localStorage.setItem("user", JSON.stringify(userResponse));
  //   return userResponse;
  // } catch (error) {
  //   throw error;
  // }
};

// export const loginUser = userData => dispatch => {
//     axios
//         .post(`${api}/users/login`, userData)
//         .then(res => {
//             // Save to localStorage
//             const { token } = res.data;
//             // Set token to ls
//             localStorage.setItem('jwtToken', token);
//             // Set token to Auth header
//             setAuthToken(token);
//             // Decode token to get user data
//             const decoded = jwt_decode(token);
//             // Set current user
//             dispatch(setCurrentUser(decoded));
//         })
//         .catch(err =>
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data
//             })
//         );
// };

const signIn = async (userData) => {
  return axios.post(`${API_URL}/users/register`, userData);
};

// const getCurrentUser = () => {
//   return JSON.parse(localStorage.getItem("user"));
// };

// const logout = () => {
//   localStorage.removeItem("user");
// };

export default {
  //   getCurrentUser,
  login,
  signIn,
  //   logout,
};
