import React from 'react'
import {TEXT_COLORS} from "../../../../shared/colors.jsx";

const Header = ({name}) => {
    return (
        <div
            className="w-full h-auto p-6"
            style={{
                color: TEXT_COLORS.primary,
                fontFamily: 'Cairo',
                fontWeight: '700',
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '3%',
                textAlign: 'right'
            }}
        >{name}</div>
    )
}
export default Header
