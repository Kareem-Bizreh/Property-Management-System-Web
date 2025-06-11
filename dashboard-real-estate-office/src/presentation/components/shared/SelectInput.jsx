import {useState, useRef, useEffect} from "react";
import {ChevronDown} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";

const SelectInput = ({title, options = [], onChange}) => {
    const [selected, setSelected] = useState(title);
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
        setSelected(value);
        setOpen(false);
        onChange?.(value);
    };

    return (
        <div ref={containerRef} className="relative h-[48px] w-full max-w-[124px]">
            <button
                onClick={() => setOpen((o) => !o)}
                className="w-full h-full flex justify-center items-center gap-4 py-2 px-3 rounded-[16px]"
                style={{
                    backgroundColor: BACKGROUND_COLORS.app,
                    color: TEXT_COLORS.select,
                    fontFamily: "Cairo",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "100%",
                    letterSpacing: "3%",
                }}
            >
                {selected}
                <ChevronDown size={20} className={`${open ? "rotate-180" : ""} transition-transform duration-200`}/>
            </button>

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
