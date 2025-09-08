import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../colors.jsx";
import {Menu} from "lucide-react";

const MenuButton = ({isSidebarOpen, setIsSidebarOpen}) => {

    return (
        <button
            className="absolute z-50 rounded-full mt-1 mr-1 max-w-fit transform transition duration-200 custom-hover"
            style={{
                '--hover-bg': BACKGROUND_COLORS['hover'],
            }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
            <div className="w-full h-full p-1 transform transition duration-200 hover:scale-110 active:scale-90">
                <Menu size={30} color={TEXT_COLORS['primary']} />
            </div>
        </button>

    )
}
export default MenuButton
