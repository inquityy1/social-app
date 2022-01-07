import AuthService from "../../services/auth";

const UseCreateUser = async (userData) => {
  return AuthService.signIn(userData);
};

export default UseCreateUser
  