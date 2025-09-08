import {filters} from "../../infrastructure/api/userPost.jsx";
import {suggest} from "../../infrastructure/api/userPostSuggestion.jsx";

const UserPostRepository = {
    filters: async (regionId, type) =>
        await filters(regionId, type),

    suggest: async (formData) => await suggest(formData),
};

export default UserPostRepository;