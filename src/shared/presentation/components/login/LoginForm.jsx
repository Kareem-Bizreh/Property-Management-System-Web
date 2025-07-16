import LogoCard from "../LogoCard.jsx";
import {TextField} from "./TextField.jsx";
import {EnterButton} from "./EnterButton.jsx";
import { useForm } from "react-hook-form"

const LoginForm = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div
            className="absolute inset-1 bg-white bg-center w-[518px] h-[700px] rounded-[53px] top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2"
        >
            <LogoCard width='239px' height='240px' top='20px' fontSize='32px'/>

            <div className="absolute right-1/2 transform translate-x-1/2 grid grid-rows-2 gap-y-10 top-[320px]">
                <TextField label={'اسم المستخدم'} value={register('username')} />
                <TextField type={'password'} label={'كلمة المرور'} value={register('password')} />
            </div>

            <div className="absolute right-1/2 transform translate-x-1/2 top-[230px]">
                <EnterButton onPress={handleSubmit(onSubmit)} />
            </div>

        </div>
    )
}
export default LoginForm
