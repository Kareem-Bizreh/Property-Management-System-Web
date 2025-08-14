import Header from "../../../shared/presentation/components/Header.jsx";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/colors.jsx";
import Button from "@mui/material/Button";
import useQuestionAddOpenStore from "../../application/state/support/useQuestionAddOpenStore.jsx";
import Question from "../../../shared/presentation/components/support/Question.jsx";
import QuestionAdd from "../components/support/QuestionAdd.jsx";

const SupportPage = () => {
    const {isOpen, setIsOpen} = useQuestionAddOpenStore();

    const questions = [
        {
            question: "ماذا أشاهد؟",
            answer: "يمكنك مشاهدة الأفلام والمسلسلات الجديدة على المنصات الشهيرة مثل نتفليكس وأمازون برايم."
        },
        {
            question: "أين استردادي؟",
            answer: "يمكنك التحقق من حالة استرداد الأموال من خلال حسابك على الموقع الرسمي للجهة المعنية أو البنك."
        },
        {
            question: "ما هو عنوان IP الخاص بي؟",
            answer: "يمكنك معرفة عنوان IP الخاص بك من خلال زيارة مواقع مخصصة مثل whatismyip.com."
        },
        {
            question: "كم عدد الأيام حتى عيد الميلاد؟",
            answer: "يتبقى على عيد الميلاد حوالي 123 يومًا اعتبارًا من اليوم."
        },
        {
            question: "من فاز في انتخابات 2024؟",
            answer: "انتهت الانتخابات الأمريكية لعام 2024 بفوز المرشح المختار."
        }
    ];

    return (
        <div className="flex flex-col">
            <Header title={"مركز الدعم"}/>

            <div className="w-full h-[65px] mb-2 flex items-center px-4"
                 style={{backgroundColor: BACKGROUND_COLORS.table}}
            >
                <Button
                    onClick={() => setIsOpen(true)}
                    variant="contained"
                    sx={{
                        color: TEXT_COLORS.white,
                        width: 180,
                        height: 45,
                        backgroundColor: BACKGROUND_COLORS.card,
                        borderRadius: '15px',
                        fontWeight: 700,
                        fontSize: '16px',
                        lineHeight: '100%',
                        letterSpacing: '3%',
                        textAlign: 'center'
                    }}
                >
                    إضافة إشعار
                </Button>
                {isOpen && (<QuestionAdd/>)}
            </div>

            <div className="flex flex-col py-4 px-6 gap-4">
                {questions.map(({question, answer}) => (
                    <Question question={question} answer={answer}/>
                ))}
            </div>
        </div>
    )
}
export default SupportPage
