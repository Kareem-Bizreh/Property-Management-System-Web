import {BACKGROUND_COLORS, TEXT_COLORS} from "../../colors.jsx";
import LogoCard from "./LogoCard.jsx";
import MenuButton from "./sidebar/MenuButton.jsx";
import Items from "./sidebar/Items.jsx";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Outlet} from 'react-router'

const Sidebar = ({items}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const width = isSidebarOpen ? '232px' : '50px';

    return (
        <div className="flex h-screen">
            <motion.div
                animate={{width}}
                initial={{width}}
                transition={{duration: 0.3, ease: "easeInOut"}}
                className="relative h-screen flex flex-col overflow-hidden"
                style={{backgroundColor: BACKGROUND_COLORS["sidebar"]}}
            >

                <MenuButton isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
                <AnimatePresence>
                    {isSidebarOpen && (
                        <motion.div
                            key="logo"
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 0.3}}
                        >
                            <LogoCard width="164px" height="165px" top="6px" fontSize="24px"/>
                            <div
                                className="relative"
                                style={{
                                    backgroundColor: TEXT_COLORS["primary"],
                                    borderRadius: "50px",
                                    width: "196px",
                                    height: "3px",
                                    top: "175px",
                                    right: "20px",
                                }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <Items isSidebarOpen={isSidebarOpen} items={items} />
            </motion.div>

            <div className="flex-1 overflow-auto mb-4">
                <Outlet/>
            </div>
        </div>
    );
};

export default Sidebar;
