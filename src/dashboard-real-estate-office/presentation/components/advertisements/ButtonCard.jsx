const ButtonCard = ({color, bgColor, title, icon, onClick}) => {
    return (
        <div
            className="flex flex-row flex-wrap justify-around items-center p-4 w-full max-w-[470px] cursor-pointer"
            onClick={onClick}
            style={{
                backgroundColor: bgColor,
                borderRadius: '25px',
                border: `3px dashed ${color}`,
            }}
        >
            <div className="flex justify-center items-center">
                <img src={icon} className="object-cover"/>
            </div>

            <span
                style={{
                    color,
                    fontFamily: 'Cairo',
                    fontWeight: '700',
                    fontSize: '32px',
                    lineHeight: '100%',
                    letterSpacing: '3%',
                    textAlign: 'center'
                }}
            >
                {title}
            </span>
        </div>
    );
}
export default ButtonCard
