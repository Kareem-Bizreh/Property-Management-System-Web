import UserPostsRepository from "../../../domain/repositories/userPostsRepository.jsx";

export const respondToPost = async (id, approved, reason) => {
    try {
        const data = {
            approved,
            reason,
        }
        const response = await UserPostsRepository.respondToUserPost(id, data);

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};
