import axios from "axios";
const baseUrl = "https://unsplashdb.herokuapp.com/api/login";

export const loginService = async (credentials) => {
    const response = await axios.post(baseUrl, credentials);
    return response.data;
};
