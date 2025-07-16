import {
  BACKGROUND_COLORS,
  TEXT_COLORS,
} from "../../../../shared/colors.jsx";
import TextInput from "./TextInput.jsx";
import UploadImage from "./UploadImage.jsx";
import KeywordSelector from "./KeywordSelector.jsx";
import { formatDate } from "../../../shared/utils/formatDate.js";
import { useForm } from "react-hook-form";

const PostDetails = ({
  readOnly = false,
  post: { date = null, title = "", image, tags = [] } = {},
  options,
}) => {
  const { register } = useForm({
    defaultValues: {
      postTitle: title,
    },
  });

  date = formatDate(date);
  return (
    <div
      className="relative min-h-[283px] mx-6 rounded-[15px] flex flex-col"
      style={{ backgroundColor: BACKGROUND_COLORS.secondary2 }}
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
        {date && date.length > 0 && (
          <span
            className="-mb-1.5 mt-1.5"
            style={{ fontSize: "16px", color: TEXT_COLORS.secondary }}
          >
            تاريخ النشر : {date}
          </span>
        )}
      </div>

      <div className="flex flex-row flex-wrap">
        <div className="flex-4 flex flex-col">
          <div className="px-8">
            <TextInput
              title={"عنوان المنشور"}
              register={register("postTitle")}
              readOnly={readOnly}
            />
          </div>
          <KeywordSelector
            readOnly={readOnly}
            select={tags?.map((tag) => tag.name.trim())}
            options={options?.map((tag) => tag.name.trim())}
            onChange={(selected) => console.log("Selected Keywords:", selected)}
            title={"كلمات مفتاحية"}
          />
        </div>
        <div className="flex-1 flex-shrink-1 px-6 py-4">
          <UploadImage
            title={"صورة المنشور"}
            image={image}
            readOnly={readOnly}
          />
        </div>
      </div>
    </div>
  );
};
export default PostDetails;
