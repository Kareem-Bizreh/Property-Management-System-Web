import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";
import TextInput from "../shared/TextInput.jsx";
import UploadImage from "../shared/UploadImage.jsx";
import KeywordSelector from "../shared/KeywordSelector.jsx";

const PostDetails = ({date = ''}) => {
    return (
        <div
            className="relative min-h-[283px] mx-6 rounded-[15px] flex flex-col"
            style={{backgroundColor: BACKGROUND_COLORS.secondary2}}
        >
            <div
                className="w-full px-6 py-3 flex flex-row flex-wrap gap-6"
                style={{
                    color: TEXT_COLORS.primary,
                    fontFamily: 'Cairo',
                    fontWeight: 700,
                    fontSize: '24px',
                    lineHeight: '100%',
                    letterSpacing: '3%',
                    textAlign: 'right',
                }}
            >
                <span>
                    تفاصيل المنشور
                </span>
                {(date && date.length > 0) &&
                    (<span className="-mb-1.5 mt-1.5" style={{fontSize: '16px', color: TEXT_COLORS.secondary}}>
                    تاريخ النشر : {date}
                    </span>
                    )}
            </div>

            <div className="flex flex-row flex-wrap">
                <div className="flex-4 flex flex-col">
                    <div className='px-8'>
                        <TextInput title={'عنوان المنشور'}/>
                    </div>
                    <KeywordSelector
                        options={["بيت", "محل", "فيلا", "مزرعة", "شاطئ", "شقة"]}
                        onChange={(selected) => console.log("Selected Keywords:", selected)}
                        title={'كلمات مفتاحية'}
                    />

                </div>
                <div className="flex-1 flex-shrink-1 px-6 py-4">
                    <UploadImage title={'صورة المنشور'}/>
                </div>
            </div>
        </div>
    )
}
export default PostDetails
