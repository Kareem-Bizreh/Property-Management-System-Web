import {useNavigate} from "react-router";
import {logoutUseCase} from "../../application/useCases/logoutUseCase.jsx";

export const useLogout = () => {
    const navigate = useNavigate();


    const logoutHandle = async () => {
        const {success} = await logoutUseCase();

        if (success) {
            navigate("/login");
        }
    };

    return {logoutHandle};
};