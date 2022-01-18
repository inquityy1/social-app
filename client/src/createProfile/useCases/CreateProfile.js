import profile from "../../services/profile";

const UseCreateProfile = async (profileData) => {
  return profile.create(profileData);
};

export default UseCreateProfile;
