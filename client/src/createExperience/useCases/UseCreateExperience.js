import ProfileService from "../../services/profile";

const UseCreateProfile = async (expData) => {
  return ProfileService.saveExperience(expData);
};

export default UseCreateProfile;
