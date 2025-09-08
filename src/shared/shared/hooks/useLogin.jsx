import {useNavigate} from "react-router";
import useUserStore from "../../application/state/useUserStore.jsx";
import {loginUseCase} from "../../application/useCases/loginUseCase.jsx";
import useErrorStore from "../../application/state/login/errorStore.jsx";

export const useLogin = () => {
    const {setUser, setAccessToken, setRefreshToken} = useUserStore();
    const {setError} = useErrorStore();
    const navigate = useNavigate();


    const login = async (credentials) => {
        const {success, data, message} = await loginUseCase(credentials);

        if (success) {
            setUser(data.data.user);
            setAccessToken(data.data.tokens.accessToken);
            setRefreshToken(data.data.tokens.refreshToken);
            setError("")
            if (data.data.user.role === "صاحب مكتب") {
                navigate("/real-estate-office");
            }
            else if (data.data.user.role === "مزود خدمة") {
                navigate("/service-provider");
            }
            else {
                navigate("/admin");
            }
        } else {
            setError(message);
        }
    };

    return {login};
};