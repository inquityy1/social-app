import profile from "../../services/profile";

const UseCreateUser = async (userData) => {
  return profile.create(userData);
};

export default UseCreateUser;
