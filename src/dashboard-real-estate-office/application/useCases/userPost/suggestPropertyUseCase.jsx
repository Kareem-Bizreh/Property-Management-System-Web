import UserPostRepository from "../../../domain/repositories/userPostRepository.jsx";

export const suggestProperty = async (propertyId, userPostId) => {
    try {
        const suggest = {
            propertyId: propertyId,
            userPostId: userPostId,
        };
        const response = await UserPostRepository.suggest(suggest);

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}