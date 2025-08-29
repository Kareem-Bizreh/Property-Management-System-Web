import LoginForm from "../components/login/LoginForm.jsx";
import {Spinner} from "../components/Spinner.jsx";
import useLoadingStore from "../../application/state/useLoadingStore.jsx";
import {useLogin} from "../../shared/hooks/useLogin.jsx";

const LoginPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore()
    const {login} = useLogin();

    const onSubmit = async (data) => {
        setIsLoading(true);
        await login(data);
        setIsLoading(false);
    };
    return (
        <div
            className="relative h-screen w-screen bg-cover bg-no-repeat bg-center bg-fixed overflow-hidden"
            style={{backgroundImage: `url(/login.jpg)`}}
        >
            <div className="absolute inset-0 bg-[#234F68] opacity-70"/>
            <LoginForm onSubmit={onSubmit}/>
            {(isLoading ? (<Spinner/>) : null)}
        </div>

    )
}
export default LoginPage
