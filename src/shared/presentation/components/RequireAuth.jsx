import {Navigate, useLocation} from "react-router";
import {useEffect} from "react";
import useLoadingStore from "../../application/state/loadingStore.jsx";
import useUserStore from "../../application/state/userStore.jsx";
import {Spinner} from "./Spinner";

const RequireAuth = ({children}) => {
    const {accessToken, setAccessToken} = useUserStore();
    const {isLoading, setIsLoading} = useLoadingStore();
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);

        const storedToken = localStorage.getItem("accessToken");
        setAccessToken(storedToken);
        setIsLoading(false);

        return () => setIsLoading(false);
    }, [setAccessToken, setIsLoading]);

    if (isLoading) {
        return <Spinner/>;
    }

    if (!accessToken) {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    return children;
};

export default RequireAuth;
