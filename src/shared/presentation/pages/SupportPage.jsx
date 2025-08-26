import Header from "../components/Header.jsx";
import Question from "../components/support/Question.jsx";
import useFaqsStore from "../../application/state/support/useFaqsStore.jsx";
import {useEffect} from "react";
import useLoadingStore from "../../application/state/useLoadingStore.jsx";
import {useNotification} from "../../shared/hooks/useNotification.jsx";
import {Spinner} from "../components/Spinner.jsx";
import {getFaqs} from "../../application/useCases/support/getFaqsUseCase.jsx";

const SupportPage = () => {
    const {faqs, setFaqs} = useFaqsStore();
    const {isLoading, setIsLoading} = useLoadingStore();
    const {notifyError} = useNotification();

    useEffect(() => {
        setIsLoading(true);
        const fetchFaqs = async () => {
            const {response, success} = await getFaqs();
            if (success) {
                setFaqs(response);
            } else {
                notifyError(response);
                setFaqs([]);
            }
            setIsLoading(false)
        };

        fetchFaqs();
    }, []);

    return (
        <div className="flex flex-col">
            <Header title={"مركز الدعم"}/>

            {isLoading ? <Spinner/> :
                <div className="flex flex-col py-4 px-6 gap-4 -mt-4">
                    {faqs?.map(({id, question, answer}) => (
                        <Question id={id} question={question} answer={answer} userMode={true}/>
                    ))}
                </div>}
        </div>
    )
}
export default SupportPage
