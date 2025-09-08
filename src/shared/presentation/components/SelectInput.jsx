import {useState, useRef, useEffect} from "react";
import {ChevronDown} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../colors.jsx";

const SelectInput = ({title, options = [], onChange, maxWidth, height, style = {}, readOnly = false}) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (value) => {
        setOpen(false);
        onChange?.(value);
        if (value === "إلغاء") {
            onChange?.(null);
        }
    };

    return (
        <div ref={containerRef} className="relative w-full select-none" style={{maxWidth}}>
            <div className="relative w-full h-full">
                <button
                    onClick={() => setOpen((o) => !readOnly ? !o : false)}
                    className="min-w-full min-h-full h-auto flex flex-row flex-nowrap justify-between items-center px-3 rounded-[16px] relative"
                    style={{
                        backgroundColor: BACKGROUND_COLORS.app,
                        color: TEXT_COLORS.select,
                        borderColor: TEXT_COLORS.secondary,
                        fontFamily: "Cairo",
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: "25px",
                        letterSpacing: "3%",
                        minHeight: height,
                        ...style,
                    }}
                >
                    <span className="flex-2 flex items-center justify-center">
                        {title}
                    </span>

                    {/* ChevronDown fixed to the right side */}
                    <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 mr-1 flex-1 ${
                            open ? "rotate-180" : ""
                        }`}
                    />
                </button>
            </div>


            <AnimatePresence>
                {open && (
                    <motion.ul
                        key="dropdown"
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        transition={{duration: 0.2}}
                        className="absolute right-0 mt-2 w-full rounded-md bg-white shadow-lg overflow-hidden max-h-40 overflow-y-auto z-20"
                    >
                        {options.map((opt, i) => (
                            <li
                                key={i}
                                onClick={() => handleSelect(opt)}
                                className="px-3 py-2 cursor-pointer transition-colors duration-200 custom-hover"
                                style={{
                                    color: TEXT_COLORS.primary,
                                    fontFamily: "Cairo",
                                    fontWeight: 600,
                                    fontSize: "16px",
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    '--hover-bg': BACKGROUND_COLORS.filter
                                }}
                            >
                                {opt}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SelectInput;
