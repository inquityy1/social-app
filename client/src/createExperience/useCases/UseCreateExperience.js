import ProfileService from "../../services/profile";

const UseCreateExperience = async (expData) => {
  return ProfileService.saveExperience(expData);
};

export default UseCreateExperience;
