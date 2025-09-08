import {BACKGROUND_COLORS, TEXT_COLORS} from "../../colors.jsx";
import TextareaAutosize from "react-textarea-autosize";

const TextInput = ({
                       name,
                       title,
                       type = "text",
                       register,
                       readOnly = false,
                       inputClassName = "",
                       multiline = false,
                       required = true,
                       validation = {},
                       errors = {}
                   }) => {
    const hasError = !!errors[name];

    const sharedStyles = {
        backgroundColor: BACKGROUND_COLORS.app,
        borderColor: hasError ? "red" : TEXT_COLORS.primary,
        fontFamily: "Cairo",
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: "150%",
        textAlign: type === "number" ? "center" : "right",
        letterSpacing: "2%",
        overflow: "hidden",
    };

    return (
        <div className="flex flex-col min-h-[97px] py-3 gap-4" key={name}>
            <span style={{
                color: TEXT_COLORS.secondary,
                fontFamily: "Cairo",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "3%",
                textAlign: "right",
            }}>
                {title}
            </span>

            {multiline ? (
                <TextareaAutosize
                    {...register(name, {
                        required: required ? `${title} مطلوب` : false,
                        ...validation,
                    })}
                    readOnly={readOnly}
                    minRows={1}
                    className={`rounded-[15px] border-[1px] min-h-[60px] pl-4 pr-4 pt-2 w-full min-w-[80px] ${hasError ? 'border-red-500' : ''} ${inputClassName}`}
                    style={sharedStyles}
                />
            ) : (
                <input
                    {...register(name, {
                        required: required ? `${title} مطلوب` : false,
                        ...validation,
                    })}
                    readOnly={readOnly}
                    type={type}
                    min={0}
                    className={`rounded-[15px] border-[1px] min-h-[60px] pl-4 pr-4 w-full min-w-[80px] ${hasError ? 'border-red-500' : ''} ${inputClassName}`}
                    style={sharedStyles}
                />
            )}

            {hasError && (
                <span className="text-red-500 text-sm pr-2">{errors[name]?.message}</span>
            )}
        </div>
    );
};

export default TextInput;
