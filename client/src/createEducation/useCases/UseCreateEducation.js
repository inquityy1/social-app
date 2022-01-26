import ProfileService from "../../services/profile";

const UseCreateEducation = async (educationData) => {
  return ProfileService.saveEducation(educationData);
};

export default UseCreateEducation;
