import AuthService from "../../services/auth";

const UseCreateUser = async (userData) => {
  return AuthService.login(userData);
};

export default UseCreateUser;
