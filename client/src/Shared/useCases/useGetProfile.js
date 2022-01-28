import ProfileService from "../../services/profile";
import toast from "react-hot-toast";
import setAuthToken from "../../utils/setAuthToken";

const UseGetProfile = async () => {
    try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            throw new Error('Not logged in!')
        }
        setAuthToken(token);
        return ProfileService.getProfile();
    } catch (error) {
        if (error.response.status === 404) {
            toast.error("Profile does not exist!");
            return;
          }
        throw error;
    }

};

export default UseGetProfile;
