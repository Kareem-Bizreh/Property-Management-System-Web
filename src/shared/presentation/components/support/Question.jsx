import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../colors.jsx";
import TextInput from "../TextInput.jsx";
import {useForm} from "react-hook-form";
import Button from "@mui/material/Button";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {ChevronDown} from "lucide-react";
import ConfirmActionModalWithMUI from "../ConfirmActionModal.jsx";

const Question = ({id, question, answer, onEdit, onDelete, userMode = false}) => {
    const {register, handleSubmit, watch} = useForm({defaultValues: {question, answer}});
    const [open, setOpen] = useState(false);
    const [editModel, setEditModel] = useState(false);
    const [deleteModel, setDeleteModel] = useState(false);

    if (userMode) {
        // User Mode → Accordion style
        return (
            <div
                className="w-full rounded-[25px] p-4 mb-2 cursor-pointer"
                style={{
                    backgroundColor: BACKGROUND_COLORS.filter,
                    fontFamily: 'Cairo',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '1.5'

                }}
                onClick={() => setOpen(!open)}
                key={id}
            >
                <div className="flex justify-between items-center">
                    <span style={{color: TEXT_COLORS.black}}>{question}</span>
                    <motion.div
                        animate={{rotate: open ? 180 : 0}}
                        transition={{duration: 0.3}}
                    >
                        <ChevronDown/>
                    </motion.div>
                </div>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: "auto"}}
                            exit={{opacity: 0, height: 0}}
                            transition={{duration: 0.3}}
                            className="mt-2"
                        >
                            <p style={{color: TEXT_COLORS.secondary}}>{answer}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    // Admin Mode → Editable fields
    return (
        <div className="flex flex-row items-center flex-wrap rounded-[25px] w-full px-4"
             style={{backgroundColor: BACKGROUND_COLORS.filter}}
             key={id}
        >
            <div className="flex flex-col flex-3 min-w-[450px]">
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
            <div className="flex flex-col items-center gap-3 w-[180px] flex-1">
                <Button variant="contained"
                        onClick={handleSubmit(() => setEditModel(true))}
                        sx={{backgroundColor: BACKGROUND_COLORS.edit, ...statusSx}}
                >
                    تعديل
                </Button>
                <Button
                    variant="contained"
                    onClick={() => setDeleteModel(true)}
                    sx={{backgroundColor: BACKGROUND_COLORS.delete, ...statusSx}}
                >
                    حذف
                </Button>
            </div>
            <ConfirmActionModalWithMUI
                open={editModel}
                onClose={() => setEditModel(false)}
                onConfirm={() => onEdit(id, watch("question"), watch("answer"))}
                type={"التعديل"}
                withReason={false}
            />
            <ConfirmActionModalWithMUI
                open={deleteModel}
                onClose={() => setDeleteModel(false)}
                onConfirm={() => onDelete(id)}
                type={"الحذف"}
                withReason={false}
            />
        </div>
    )
};

export default Question;

const statusSx = {
    width: 150,
    height: 30,
    borderRadius: '25px',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '100%',
    letterSpacing: '3%',
    textAlign: 'center'
};
