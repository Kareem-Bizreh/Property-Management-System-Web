import useQuestionAddOpenStore from "../../../application/state/support/useQuestionAddOpenStore.jsx";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import Popup from "reactjs-popup";
import Header from "../../../../shared/presentation/components/Header.jsx";
import {useForm} from "react-hook-form";
import TextInput from "../../../../shared/presentation/components/TextInput.jsx";
import Button from "@mui/material/Button";

const QuestionAdd = () => {
    const {isOpen, setIsOpen} = useQuestionAddOpenStore();
    const {register, handleSubmit} = useForm();

    const onSubmit = async () => {}

    return (
        <Popup
            open={isOpen}
            onClose={() => setIsOpen(false)}
            modal
            nested
            closeOnDocumentClick
            contentStyle={{
                width: '580px',
                height: 'auto',
                borderRadius: '90px',
                backgroundColor: BACKGROUND_COLORS.app,
                color: TEXT_COLORS.secondary,
                padding: '30px',
            }}
        >
            {(close) => (
                <div className="flex flex-col items-center flex-wrap gap-4"
                     style={{
                         fontFamily: 'Cairo',
                         fontWeight: 700,
                         fontSize: '18px',
                         lineHeight: '100%',
                         letterSpacing: '3%',
                     }}
                >
                    <div className="w-[250px] -my-4 mr-6 whitespace-nowrap">
                        <Header title="إضافة سؤال"/>
                    </div>

                    <div className="flex flex-col w-full -mt-4" style={{color: TEXT_COLORS.black}}>
                        <TextInput
                            multiline={true}
                            title="السؤال"
                            type="text"
                            name={"question"}
                            register={register}
                        />
                        <TextInput
                            multiline={true}
                            title="الجواب"
                            type="text"
                            name={"answer"}
                            register={register}
                        />
                    </div>

                    <div className="flex flex-row items-center gap-6">
                        <Button variant="contained"
                                onClick={close}
                                sx={{
                                    width: 160,
                                    height: 47,
                                    color: BACKGROUND_COLORS.primary,
                                    backgroundColor: BACKGROUND_COLORS.secondary1,
                                    borderRadius: '25px',
                                    ...sharedSx
                                }}
                        >
                            إلغاء
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleSubmit(onSubmit)}
                            sx={{
                                width: 160,
                                height: 47,
                                color: BACKGROUND_COLORS.app,
                                backgroundColor: BACKGROUND_COLORS.primary,
                                borderRadius: '25px',
                                ...sharedSx
                            }}
                        >
                            إرسال
                        </Button>
                    </div>
                </div>
            )}
        </Popup>
    )
}
export default QuestionAdd

const sharedSx = {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '3%',
    textAlign: 'center'
};