import ProfileService from "../../services/profile";

const UseCreateProfile = async (profileData) => {
  return ProfileService.create(profileData);
};

export default UseCreateProfile;
