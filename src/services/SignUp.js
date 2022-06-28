import axios from "axios";
const baseUrl = "https://unsplashdb.herokuapp.com/api/user";

const signUpService = async (credentials) => {
    try {
        const response = await axios.post(baseUrl, credentials);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export default signUpService;
