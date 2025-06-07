import backgroundImage from '../../assets/login.jpg';
import LoginForm from "../components/login/LoginForm.jsx";

const LoginPage = () => {
    return (
        <div
            className="relative h-screen w-screen bg-cover bg-no-repeat bg-center bg-fixed overflow-hidden"
            style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <div className="absolute inset-0 bg-[#234F68] opacity-70"/>
            <LoginForm/>
        </div>

    )
}
export default LoginPage
