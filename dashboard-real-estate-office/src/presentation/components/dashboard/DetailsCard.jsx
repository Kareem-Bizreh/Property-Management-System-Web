const DetailsCard = ({color, bgColor, title, icon, number}) => {
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
            <div className="flex flex-row items-center justify-center mb-4 mt-2 ml-4">
                <img
                    src={icon}
                    alt="icon"
                    className="w-[45px] h-[45px] ml-10 mr-2"
                />

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
        </div>
    );
};

export default DetailsCard;
