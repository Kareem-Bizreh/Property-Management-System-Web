import React from 'react'

const RealEstatePlaces = ({color, bgColor, title, icon}) => {
    return (
        <div
            className="flex flex-col justify-between items-center p-4 w-full h-full min-h-[174px]"
            style={{
                backgroundColor: bgColor,
                borderRadius: '25px',
                border: `2px dashed ${color}`,
            }}
        >
            {/* Title */}
            <span
                style={{
                    color,
                    fontFamily: 'Cairo',
                    fontWeight: '700',
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '3%',
                    textAlign: 'center'
                }}
            >
                {title}
            </span>

            {/*Number and icon*/}
            <div className="flex flex-row items-center justify-center mb-4 mt-2 ml-4 gap-8">
                {
                    NumberAndDetail('بيع', 16, color)
                }
                <img
                    src={icon}
                    alt="icon"
                    className="w-[45px] h-[45px]"
                />
                {
                    NumberAndDetail('إيجار', 11, color)
                }
            </div>
        </div>
    );
};
export default RealEstatePlaces


const NumberAndDetail = (name, number, color) => {
    return (
        <div className="flex flex-col gap-8 p-2">
            <span
                style={{
                    color,
                    fontFamily: 'Cairo',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '3%',
                    textAlign: 'center'
                }}
            >
                {name}
            </span>
            <span
                style={{
                    color,
                    fontFamily: 'Cairo',
                    fontWeight: '700',
                    fontSize: '24px',
                    lineHeight: '100%',
                    letterSpacing: '3%',
                    textAlign: 'center'
                }}
            >
                {number}
            </span>
        </div>
    )
}
