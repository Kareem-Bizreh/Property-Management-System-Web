import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";
import {Link} from "react-router";
import add from "../../../assets/cards/add-square.svg"

const AddCard = () => {
    return (
        <Link to="add">
            <div className="relative w-[212px] h-[363px] rounded-[25px]"
                 style={{backgroundColor: BACKGROUND_COLORS.filter}}>
                <img
                    className="absolute object-cover right-1/2 transform translate-x-1/2 top-[110px]"
                    alt="add property"
                    src={add}
                />
                <span
                    className="absolute object-cover right-1/2 transform translate-x-1/2 top-[230px]"
                    style={{
                        color: TEXT_COLORS.primary,
                        fontFamily: 'Cairo',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: '100%',
                        letterSpacing: '3%',
                        textAlign: "center",

                    }}
                >
               إضافة عقار
            </span>
            </div>
        </Link>
    )
}
export default AddCard
