import {Link, useLocation} from "react-router";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../colors.jsx";
import {motion, AnimatePresence} from "framer-motion";

const Items = ({isSidebarOpen, items}) => {
    const location = useLocation();
    const width = isSidebarOpen ? '222px' : '42px';
    const topPosition = isSidebarOpen ? '186px' : '70px';

    return (
        <motion.div
            initial={{top: topPosition}}
            animate={{top: topPosition}}
            transition={{duration: 0.35, ease: 'easeInOut'}}
            className="absolute flex flex-col overflow-x-hidden overflow-y-auto"
            style={{
                height: `calc(100vh - ${topPosition})`,
                scrollbarWidth: 'thin',
                scrollbarColor: `${BACKGROUND_COLORS['hover']} transparent`,
            }}
        >
            {items.map((item) => {
                const isActive = location.pathname.includes(item.href);
                const backgroundColor = isActive ? BACKGROUND_COLORS['primary'] : undefined;
                const textColor = isActive ? TEXT_COLORS['white'] : TEXT_COLORS['primary'];

                return (
                    <motion.div
                        key={item.href}
                        initial={false}
                        animate={{
                            marginTop: isSidebarOpen ? 0 : 10,
                        }}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                    >
                        <Link key={item.href} to={item.href}>
                            <motion.div
                                animate={{width}}
                                transition={{duration: 0.3, ease: "easeInOut"}}
                                className={`flex flex-row items-center h-[44px] mr-1 transition-colors duration-200 ease-in-out custom-hover`}
                                style={{
                                    width,
                                    borderRadius: '15px',
                                    backgroundColor,
                                    '--hover-bg': BACKGROUND_COLORS['hover'],
                                }}
                            >
                                <img
                                    alt={item.name}
                                    src={item.icon}
                                    className="w-[25px] h-[25px] transition-[filter] duration-200 ease-in-out ml-3 mr-2 select-none"
                                    style={{
                                        filter: isActive ? 'invert(1) brightness(2)' : 'none',
                                    }}
                                />

                                <AnimatePresence>
                                    {isSidebarOpen && (
                                        <motion.span
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0,}}
                                            transition={{duration: 0.15}}
                                            className="absolute right-[50px] w-[160px] h-[28px] mt-2"
                                            style={{
                                                color: textColor,
                                                fontFamily: 'Cairo',
                                                fontWeight: '600',
                                                fontSize: '18px',
                                                lineHeight: '100%',
                                                textAlign: 'center',
                                            }}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default Items;
