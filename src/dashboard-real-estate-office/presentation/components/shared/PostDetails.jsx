import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import TextInput from "./TextInput.jsx";
import UploadImage from "./UploadImage.jsx";
import KeywordSelector from "./KeywordSelector.jsx";
import {useForm} from "react-hook-form";
import usePropertyStore from "../../../application/state/Property/usePropertyStore.jsx";
import {useEffect} from "react";
import {formatDate} from "../../../shared/utils/formatDate.js";

const PostDetails = ({readOnly = false, options}) => {
    const {property, setProperty} = usePropertyStore();
    const {register, watch} = useForm({defaultValues: {postDescription: property?.postDescription}});

    const setTag = (tag) => {
        setProperty({...property, tag});
    }

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
                {property.postDate && property.postDate.length > 0 && (
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
                            title={"وصف المنشور"}
                            register={register("postDescription")}
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
