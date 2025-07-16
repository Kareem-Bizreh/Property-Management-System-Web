import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import star from '../../../assets/shared/star.svg'

const OfficeDetails = () => {
    const imgSrc = ''; // https://userpic.codeforces.org/3060832/title/c773068ec0bb8654.jpg
    const officeName = 'اسم المكتب'
    const rating = '4.75';
    const address = 'دمشق ,ميدان';

    return (
        <div className="w-full bg-white p-4 sm:p-6">
            <div className="flex flex-col md:flex-row items-center md:justify-start gap-6 h-auto">

                {/* image profile */}
                <div
                    className="w-[174px] h-[174px] rounded-full flex-shrink-0 md:mr-10 md:ml-8"
                    style={{
                        backgroundColor: BACKGROUND_COLORS['picture'],
                        borderColor: TEXT_COLORS['secondary'],
                        borderWidth: '1px',
                    }}
                >
                    {imgSrc && (
                        <img
                            src={imgSrc}
                            alt="profile"
                            className="w-full h-full rounded-full object-cover"
                        />
                    )}
                </div>

                {/* Office Name & Rating */}
                <div className="flex flex-col items-center flex-shrink-0 mt-4 md:ml-10">
                    <h2
                        style={{
                            color: TEXT_COLORS['secondary'],
                            fontFamily: 'Cairo',
                            fontWeight: '700',
                            fontSize: '24px',
                            lineHeight: '100%',
                            letterSpacing: '3%',
                            textAlign: 'right'
                        }}
                    >
                        {officeName}
                    </h2>

                    <div
                        className="mt-8 px-10 py-4 rounded-[16px]"
                        style={{backgroundColor: BACKGROUND_COLORS.secondary2}}
                    >
                        <div
                            style={{
                                color: TEXT_COLORS['primary'],
                                fontFamily: 'Tajawal',
                                fontWeight: '700',
                                fontSize: '16px',
                                lineHeight: '18px',
                                letterSpacing: '3%',
                                textAlign: 'center',
                                verticalAlign: 'middle'
                            }}
                        >
                            التقييم
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-1">
                            <img src={star} alt="star" className="w-8 h-8"/>
                            <span
                                style={{
                                    color: TEXT_COLORS['primary'],
                                    fontFamily: 'Tajawal',
                                    fontWeight: '700',
                                    fontSize: '24px',
                                    lineHeight: '100%',
                                    letterSpacing: '3%',
                                    horizontalAlign: 'center'
                                }}
                            >
                                {rating}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Address */}
                <div className="flex-shrink-0">
                    <span
                        style={{
                            color: TEXT_COLORS['secondary'],
                            fontFamily: 'Cairo',
                            fontWeight: '700',
                            fontSize: '18px',
                            lineHeight: '100%',
                            letterSpacing: '3%',
                            textAlign: 'right'
                        }}
                   >
                        {address}
                   </span>
                </div>
            </div>
        </div>

    )
}
export default OfficeDetails
