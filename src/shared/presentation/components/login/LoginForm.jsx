import LogoCard from "../LogoCard.jsx";
import {TextField} from "./TextField.jsx";
import {EnterButton} from "./EnterButton.jsx";
import {useForm} from "react-hook-form"
import {useLogin} from "../../../shared/hooks/useLogin.jsx";
import useErrorStore from "../../../application/state/login/errorStore.jsx";
import useLoadingStore from "../../../application/state/loadingStore.jsx";

const LoginForm = () => {
    const {register, handleSubmit} = useForm();
    const {error} = useErrorStore();
    const {login} = useLogin();
    const {setIsLoading} = useLoadingStore();

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await login(data);
        }
        finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="absolute inset-1 bg-white bg-center w-[518px] h-[700px] rounded-[53px] top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2"
        >
            <LogoCard width='239px' height='240px' top='20px' fontSize='32px'/>

            <div className="absolute right-1/2 transform translate-x-1/2 grid grid-rows-2 gap-y-10 top-[320px]">
                <TextField label={'اسم المستخدم'} value={register('username',{required: 'اسم الستخدم مطلوب'})}/>
                <TextField type={'password'} label={'كلمة المرور'} value={register('password', {required: 'كلمة السر مطلوبة'})}/>
            </div>

            <div className="absolute right-1/2 transform translate-x-1/2 top-[230px]">
                <EnterButton onPress={handleSubmit(onSubmit)}/>
            </div>
            <div dir={'ltr'}
                 className="absolute right-1/2 transform translate-x-1/2 top-[640px] text-red-500 text-lg font-semibold whitespace-nowrap px-2 py-1">
                {error}
            </div>
        </div>
    )
}
export default LoginForm
