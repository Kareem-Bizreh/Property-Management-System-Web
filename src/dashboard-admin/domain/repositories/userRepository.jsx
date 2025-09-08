import {getUserDetails} from "../../infrastructure/api/userApis.jsx";

const UserRepository = {
    getDetails: async () => await getUserDetails(),
};

export default UserRepository;
