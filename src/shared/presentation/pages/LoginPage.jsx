import LoginForm from "../components/login/LoginForm.jsx";
import {Spinner} from "../components/Spinner.jsx";
import useLoadingStore from "../../application/state/useLoadingStore.jsx";

const LoginPage = () => {
    const {isLoading} = useLoadingStore()
    return (
        <div
            className="relative h-screen w-screen bg-cover bg-no-repeat bg-center bg-fixed overflow-hidden"
            style={{backgroundImage: `url(/login.jpg)`}}
        >
            <div className="absolute inset-0 bg-[#234F68] opacity-70"/>
            <LoginForm/>
            {(isLoading ? (<Spinner/>) : null)}
        </div>

    )
}
export default LoginPage
