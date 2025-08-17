import {useEffect} from "react";
import Header from "../../../shared/presentation/components/Header.jsx";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/colors.jsx";
import Button from "@mui/material/Button";
import useQuestionAddOpenStore from "../../application/state/support/useQuestionAddOpenStore.jsx";
import Question from "../../../shared/presentation/components/support/Question.jsx";
import QuestionAdd from "../components/support/QuestionAdd.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import useDataStore from "../../application/state/useDataStore.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";
import {getSupports} from "../../application/useCases/supports/getSupportsUseCase.jsx";
import {deleteSupport} from "../../application/useCases/supports/deleteSupportUseCase.jsx";
import {editSupport} from "../../application/useCases/supports/editSupportUseCase.jsx";

const SupportPage = () => {
    const {isOpen, setIsOpen} = useQuestionAddOpenStore();
    const {isLoading, setIsLoading} = useLoadingStore();
    const {data, setDataForTab} = useDataStore();
    const {notifyError, notifySuccess} = useNotification();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const {success, response} = await getSupports();
            if (success) {
                setDataForTab(0, response.data);
            } else {
                setDataForTab(0, []);
                notifyError(response);
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    const onDelete = async (id) => {
        setIsLoading(true);
        const {success, response} = await deleteSupport(id);
        if (success) {
            setDataForTab(0, data[0]?.filter((item) => item.id !== id));
            notifySuccess("تم حذف السؤال");
        } else {
            notifyError(response);
        }
        setIsLoading(false);
    }

    const onEdit = async (id, question, answer) => {
        setIsLoading(true);
        const {success, response} = await editSupport(id, question, answer);
        if (success) {
            setDataForTab(0, data[0]?.map(item => {
                if (item.id === id) {
                    return {...item, question, answer,};
                }
                return item;
            }));
            notifySuccess("تم تعديل السؤال");
        } else {
            notifyError(response);
        }
        setIsLoading(false);
    }

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
                    إضافة سؤال
                </Button>
                {isOpen && (<QuestionAdd/>)}
            </div>

            {(isLoading || !data) ? <Spinner/> :
                <div className="flex flex-col py-4 px-6 gap-4">
                    {data[0]?.map(({id, question, answer}) => (
                        <Question id={id} question={question} answer={answer} onDelete={onDelete} onEdit={onEdit}/>
                    ))}
                </div>
            }
        </div>
    )
}
export default SupportPage
