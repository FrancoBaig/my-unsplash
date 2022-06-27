import axios from "axios";
const baseUrl = "http://localhost:3001/api/images";
const likedUrl = "http://localhost:3001/api/images/liked/";
const update = "http://localhost:3001/api/user/like";

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

const updateLikes = async (userId, likes, ImageId) => {
    try {
        const body = {
            id: userId,
            likes: likes,
            imageId: ImageId,
        };
        const response = await axios.put(update, body);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const getLikedPhotos = async (userId) => {
    try {
        const url = baseUrl + `/liked/${userId}`;
        const liked = await axios.get(url);
        return liked.data;
    } catch (error) {
        console.log(error);
    }
};

const deletePhoto = async (imageId) => {
    try {
        const url = baseUrl + `/${imageId}`;
        await axios.delete(url);
    } catch (error) {
        console.log(error);
    }
};

export { getAll, postPhoto, updateLikes, getLikedPhotos, deletePhoto };
