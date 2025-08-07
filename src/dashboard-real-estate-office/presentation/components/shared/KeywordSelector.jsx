import {motion, AnimatePresence} from "framer-motion";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";

const KeywordSelector = ({options = [], select = [], onChange, title, readOnly = false, onlyOne = false}) => {

    const toggleKeyword = (word) => {
        if (readOnly) {
            return;
        }
        let next;
        if (select.includes(word)) {
            if (onlyOne) {
                return;
            } else {
                next = select.filter(w => w !== word);
            }
        } else {
            if (onlyOne) {
                next = [word];
            } else {
                next = [...select, word];
            }
        }

        if (onlyOne)
            onChange?.(...next);
        else onChange?.(next);
    };

    return (
        <div
            className="flex flex-col min-h-[97px] px-8 py-3 gap-4 select-none"
            style={{
                fontFamily: 'Cairo',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '3%',
            }}
        >
            {/* Label */}
            <span style={{color: TEXT_COLORS.secondary, textAlign: 'right'}}>
                {title}
            </span>

            {/* Selected tags with animation */}
            <div
                className="flex flex-wrap items-center gap-2 p-2 rounded-[15px] border-[1px] min-h-[60px] px-4"
                style={{
                    backgroundColor: BACKGROUND_COLORS.app,
                    borderColor: TEXT_COLORS.primary,
                    fontSize: '14px',
                    lineHeight: '18px'
                }}
            >
                <AnimatePresence>
                    {select.map((word) => (
                        <motion.div
                            key={word}
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0.8}}
                            transition={{duration: 0.2}}
                            className="relative inline-flex items-center justify-center h-[34px] px-4 rounded-[5px] cursor-pointer transition-colors duration-200 max-w-full"
                            style={{
                                color: TEXT_COLORS.select,
                                backgroundColor: BACKGROUND_COLORS.sidebar,
                            }}
                            onClick={() => toggleKeyword(word)}
                        >
                            <span className="truncate py-2">{word}</span>
                        </motion.div>
                    ))}
                </AnimatePresence>

            </div>

            {/* Options list */}
            <div className="flex flex-wrap gap-2 mt-3">
                {options.map((word) => {
                    const isSelected = select.includes(word);

                    return (
                        <div
                            key={word}
                            className="relative inline-flex items-center justify-center h-[34px] px-4 rounded-[5px] transition-colors duration-200 cursor-pointer select-none max-w-full"
                            style={{
                                color: isSelected ? BACKGROUND_COLORS.sidebar : TEXT_COLORS.select,
                                backgroundColor: isSelected ? TEXT_COLORS.select : BACKGROUND_COLORS.sidebar,
                                fontSize: '14px',
                                lineHeight: '18px'
                            }}
                            onClick={() => toggleKeyword(word)}
                        >
                            <span className="truncate py-2">{word}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default KeywordSelector;
