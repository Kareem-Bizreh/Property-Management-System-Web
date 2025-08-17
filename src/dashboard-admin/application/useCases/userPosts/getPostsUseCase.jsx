import UserPostsRepository from "../../../domain/repositories/userPostsRepository.jsx";

export const getPosts = async (status) => {
    try {
        const response = await UserPostsRepository.getUserPosts(status);

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};
