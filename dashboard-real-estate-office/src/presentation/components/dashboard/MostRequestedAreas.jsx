import Header from "./Header.jsx";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";

const MostRequestedAreas = () => {
    const data = [
        'دمشق , ميدان',
        'دمشق , ميدان',
        'دمشق , ميدان',
        'دمشق , ميدان',
        'دمشق , ميدان',
        'دمشق , ميدان',
        'دمشق , ميدان',
        'دمشق , ميدان',
        'دمشق , ميدان',
        'دمشق , ميدان',
    ]

    return (
        <div className="flex flex-col max-w-screen mr-4">
            <Header name={'أفضل المناطق طلباً'}/>
            <div className='flex flex-col md:flex-row gap-4 w-full h-auto'>
                {MostRequested('عقاري', data)}
                {MostRequested('سياحي', data)}
            </div>
        </div>
    )
}
export default MostRequestedAreas

const MostRequested = (title, data) => {
    return (
        <div className="flex flex-col gap-4 w-full h-auto p-4 rounded-[25px] min-h-[260px] text-center" key={title}
             style={{background: '#F8F8F8'}}>
            <span
                style={{
                    color: TEXT_COLORS.primary,
                    fontFamily: 'Cairo',
                    fontWeight: '700',
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '3%'
                }}
            >
                {title}
            </span>
            <div className="grid grid-rows-5 grid-cols-2 gap-2 grid-flow-col">
                {
                    (data && data.length > 0) && (
                        data.map((item, index) => {
                            return (
                                <div key={index} className='flex md:flex-row flex-col justify-around p-3 items-center gap-6 rounded-[14px]'
                                     style={{backgroundColor: (index < 3 ? BACKGROUND_COLORS.sidebar : 'none')}}
                                >
                                    <span style={{
                                        color: (index < 3 ? TEXT_COLORS.firstThree : TEXT_COLORS.secondary),
                                        fontFamily: 'Cairo',
                                        fontWeight: '700',
                                        fontSize: '18px',
                                        lineHeight: '100%',
                                        letterSpacing: '3%',
                                        textAlign: 'center',
                                    }}>
                                        {index + 1}
                                    </span>
                                    <span
                                        className="-mr-6"
                                        style={{
                                            color: (index < 3 ? TEXT_COLORS.firstThree : TEXT_COLORS.secondary),
                                            fontFamily: 'Cairo',
                                            fontWeight: '700',
                                            fontSize: '16px',
                                            lineHeight: '100%',
                                            letterSpacing: '3%',
                                            textAlign: 'center'
                                        }}>
                                        {item}
                                    </span>
                                </div>
                            );
                        })
                    )
                }
            </div>
        </div>
    )
}

