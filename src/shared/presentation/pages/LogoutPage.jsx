import {useEffect} from "react";
import {useLogout} from "../../shared/hooks/useLogout.jsx";
import useLoadingStore from "../../application/state/loadingStore.jsx";
import {Spinner} from "../components/Spinner.jsx";
import {useNavigate} from "react-router";

const LogoutPage = () => {
    const {logoutHandle} = useLogout();
    const {isLoading, setIsLoading} = useLoadingStore();
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            setIsLoading(true);
            try {
                await logoutHandle();

                navigate("/login");
            } catch {
                navigate(-1);
            } finally {
                setIsLoading(false);
            }
        };

        logout();
    }, []);

    return (
        <div className="h-screen flex items-center justify-center">
            {isLoading && <Spinner/>}
        </div>
    );
};

export default LogoutPage;
