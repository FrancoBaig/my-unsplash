import axios from "axios";
const baseUrl = "http://localhost:3001/api/images";

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const postPhoto = async (data, user) => {
    try {
        const config = {
            headers: { Authorization: user.token },
        };
        const response = await axios.post(baseUrl, data, config);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export { getAll, postPhoto };
