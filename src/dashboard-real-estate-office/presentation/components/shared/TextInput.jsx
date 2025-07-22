import {
    BACKGROUND_COLORS,
    TEXT_COLORS,
} from "../../../../shared/colors.jsx";
import TextareaAutosize from "react-textarea-autosize";

const TextInput = ({
                       title,
                       type = "text",
                       register,
                       readOnly = false,
                       inputClassName = "",
                       multiline = false,
                       minRows = 1,
                       ...props
                   }) => {
    const sharedStyles = {
        backgroundColor: BACKGROUND_COLORS.app,
        borderColor: TEXT_COLORS.primary,
        fontFamily: "Cairo",
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: "150%",
        textAlign: type === "number" ? "center" : "right",
        letterSpacing: "2%",
        overflow: "hidden",
    };

    return (
        <div className="flex flex-col min-h-[97px] py-3 gap-4">
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
                    {...register}
                    readOnly={readOnly}
                    minRows={minRows}
                    className={`rounded-[15px] border-[1px] min-h-[60px] pl-4 pr-4 pt-2 w-full min-w-[80px] ${inputClassName}`}
                    style={sharedStyles}
                    {...props}
                />
            ) : (
                <input
                    {...register}
                    readOnly={readOnly}
                    type={type}
                    min={0}
                    className={`rounded-[15px] border-[1px] min-h-[60px] pl-4 pr-4 w-full min-w-[80px] ${inputClassName}`}
                    style={sharedStyles}
                    {...props}
                />
            )}
        </div>
    );
};

export default TextInput;
