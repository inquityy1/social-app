import ProfileService from "../../services/profile";
import setAuthToken from "../../utils/setAuthToken";

const UseGetProfile = async () => {
  try {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      throw new Error("Not logged in!");
    }
    setAuthToken(token);
    const response = await ProfileService.getProfile();
    // hack for idiotic axios
    if (response.data) {
      return response;
    }
  } catch (error) {
    if (error.response.status === 404) {
      return { firstTimeUser: true };
    }
    throw error;
  }
};

export default UseGetProfile;
