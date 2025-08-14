import Header from "../../../shared/presentation/components/Header.jsx";
import Question from "../../../shared/presentation/components/support/Question.jsx";

const SupportPage = () => {
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

            <div className="flex flex-col py-4 px-6 gap-4 -mt-4">
                {questions.map(({question, answer}) => (
                    <Question question={question} answer={answer} userMode={true}/>
                ))}
            </div>
        </div>
    )
}
export default SupportPage
