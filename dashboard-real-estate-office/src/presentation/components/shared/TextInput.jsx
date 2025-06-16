import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";

const TextInput = ({title, type = 'text'}) => {
    return (
        <div className="flex flex-col min-h-[97px] py-3 gap-4">
            <span
                style={{
                    color: TEXT_COLORS.secondary,
                    fontFamily: 'Cairo',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '3%',
                    textAlign: 'right',
                }}
            >
                {title}
            </span>
            <input
                type={type}
                className='rounded-[15px] border-[1px] min-h-[60px] pl-4 pr-4 w-full min-w-[80px]'
                style={{
                    backgroundColor: BACKGROUND_COLORS.app,
                    borderColor: TEXT_COLORS.primary,
                    fontFamily: 'Cairo',
                    fontWeight: '400',
                    fontSize: '24px',
                    lineHeight: '130%',
                    letterSpacing: '2%'
                }}
            />
        </div>
    )
}
export default TextInput
