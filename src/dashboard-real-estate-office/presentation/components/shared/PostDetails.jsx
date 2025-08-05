import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import TextInput from "./TextInput.jsx";
import UploadImage from "./UploadImage.jsx";
import KeywordSelector from "./KeywordSelector.jsx";
import {useFormContext} from "react-hook-form";
import {useEffect} from "react";
import {formatDate} from "../../../shared/utils/formatDate.js";

const PostDetails = ({readOnly = false, options, property, setProperty}) => {
    const {register, watch, setValue, getValues} = useFormContext();

    const setTag = (tag) => {
        setProperty({...property, tag});
    }

    useEffect(() => {
        const currentValue = getValues("postDescription");
        if (currentValue !== property.postDescription) {
            setValue("postDescription", property?.postDescription || "");
        }
    }, [property?.postDescription, setValue, getValues]);

    const postDescription = watch('postDescription');
    useEffect(() => {
        if (postDescription !== property.postDescription) {
            setProperty({...property, postDescription});
        }
    }, [postDescription]);

    return (
        <div
            className="relative min-h-[283px] mx-6 rounded-[15px] flex flex-col"
            style={{backgroundColor: BACKGROUND_COLORS.secondary2}}
        >
            <div
                className="w-full px-6 py-3 flex flex-row flex-wrap gap-6"
                style={{
                    color: TEXT_COLORS.primary,
                    fontFamily: "Cairo",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "100%",
                    letterSpacing: "3%",
                    textAlign: "right",
                }}
            >
                <span>تفاصيل المنشور</span>
                {property.postDate && (
                    <span
                        className="-mb-1.5 mt-1.5"
                        style={{fontSize: "16px", color: TEXT_COLORS.secondary}}
                    >
                        تاريخ النشر : {formatDate(property.postDate)}
                    </span>
                )}
            </div>

            <div className="flex flex-row flex-wrap">
                <div className="flex-4 flex flex-col">
                    <div className="px-8">
                        <TextInput
                            name={"postDescription"}
                            title={"وصف المنشور"}
                            register={register}
                            multiline={true}
                            readOnly={readOnly}
                        />
                    </div>
                    <KeywordSelector
                        onlyOne={true}
                        readOnly={readOnly}
                        select={[property.tag]}
                        options={options}
                        onChange={setTag}
                        title={"كلمات مفتاحية"}
                    />
                </div>
                <div className="flex-1 flex-shrink-1 px-6 py-4">
                    <UploadImage
                        title={"صورة المنشور"}
                        image={property.postImage}
                        onChange={(postImage) => setProperty({...property, postImage})}
                        onDelete={() => setProperty({...property, postImage: null})}
                        readOnly={readOnly}
                    />
                </div>
            </div>
        </div>
    );
};
export default PostDetails;
