import { axiosPrivate } from "../api/axiosConfig";
import { useAuth } from "../Context/AuthProvider";

export const useRefreshToken = () => {
  const { setUserData } = useAuth();

  const refresh = async () => {
    const response = await axiosPrivate.get("/refresh", {
      withCredentials: true,
    });
    const { roles, accessToken } = response.data;
    setUserData((prev) => {
      console.log(prev);
      return {
        ...prev,
        roles,
        accessToken,
      };
    });
    return accessToken;
  };
  return refresh;
};
