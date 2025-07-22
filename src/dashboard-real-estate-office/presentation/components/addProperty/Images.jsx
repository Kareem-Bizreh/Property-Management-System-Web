import trash from "../../../assets/shared/trash.svg";
import {BACKGROUND_COLORS} from "../../../../shared/colors.jsx";

const Images = ({images, readOnly}) => {
    return (
        <div className="flex flex-col gap-2 mb-4">
            {images?.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="max-w-[241px] max-h-[177px] flex flex-row justify-between items-center gap-2"
                    >
                        <img
                            className="w-[189px] h-[177px] object-cover rounded-[18px]"
                            src={item.image_url}
                        />
                        {!readOnly && (
                            <div
                                className="relative w-[43px] h-[43px] rounded-[15px] border-[1px] bg-[#FEC7C3]
                                            transition-colors duration-200 cursor-pointer custom-hover"
                                style={{
                                    "--hover-bg": "white",
                                    borderColor: BACKGROUND_COLORS.unavailable,
                                }}
                            >
                                <img
                                    className="absolute object-cover right-1/2 transform translate-x-1/2 top-1/2 -translate-y-1/2"
                                    src={trash}
                                />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
export default Images;
