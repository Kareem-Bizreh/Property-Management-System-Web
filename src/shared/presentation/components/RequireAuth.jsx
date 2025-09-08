import {Navigate, useLocation} from "react-router";
import {useEffect, useState} from "react";
import useUserStore from "../../application/state/useUserStore.jsx";
import {Spinner} from "./Spinner";

const RequireAuth = ({children}) => {
    const {accessToken, setAccessToken, setUser, user} = useUserStore();
    const location = useLocation();
    const [checkingAuth, setCheckingAuth] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem("accessToken");
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setAccessToken(storedToken);
        setUser(storedUser);
        setCheckingAuth(false);
    }, []);

    if (checkingAuth) {
        return <Spinner/>;
    }

    if (!accessToken || !user) {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    return children;
};

export default RequireAuth;
