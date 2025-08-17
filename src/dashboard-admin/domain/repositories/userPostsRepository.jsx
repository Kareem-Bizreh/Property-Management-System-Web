import {getUserPosts, respondToUserPost} from "../../infrastructure/api/userPostsApis.jsx";

const UserPostsRepository = {
    getUserPosts: async (status) => await getUserPosts(status),
    respondToUserPost: async (id, payload) => await respondToUserPost(id, payload),
};

export default UserPostsRepository;
