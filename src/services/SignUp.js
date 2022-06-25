import axios from "axios";
const baseUrl = "http://localhost:3001/api/user";

const signUpService = async (credentials) => {
    const response = await axios.post(baseUrl, credentials);
    return response;
};

export default signUpService;
