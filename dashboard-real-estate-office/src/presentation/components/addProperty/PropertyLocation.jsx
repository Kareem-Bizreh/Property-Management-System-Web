import Header2 from "./Header2.jsx";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";
import SelectInput from "../shared/SelectInput.jsx";
import TextInput from "../shared/TextInput.jsx";
import map from "../../../assets/shared/map-marker.svg";

const PropertyLocation = () => {
    return (
        <div className="flex flex-col">
            <Header2 title={'الموقع:'}/>
            <div className='flex flex-col gap-2 mx-12 my-6'>
                <div className='flex flex-row flex-wrap items-center gap-6 w-full'>
                    <div className="flex flex-col gap-2 flex-1">
                        <span style={styles}>
                            المحافظة
                        </span>
                        <SelectInput title=''
                                     options={['دمشق', 'ريف دمشق', 'حلب', 'حمص',
                                         'حماة', 'اللاذقية', 'طرطوس', 'إدلب',
                                         'الحسكة', 'دير الزور', 'الرقة', 'درعا',
                                         'السويداء', 'القنيطرة']
                                     }
                                     height={'60px'}
                                     style={{borderWidth: '1px', fontWeight: 600, color: TEXT_COLORS.primary, fontSize: '18px'}}
                        />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                        <span style={styles}>
                            المنطقة
                        </span>
                        <SelectInput title='' options={[]} height={'60px'}
                                     style={{borderWidth: '1px', fontWeight: 600, fontSize: '18px'}}/>
                    </div>
                </div>

                <div className='flex flex-row justify-between flex-wrap w-full gap-6'>
                    <div className="flex-1">
                        <TextInput title={'الطابق'}/>
                    </div>
                    <div className="flex-1 flex flex-row flex-wrap justify-around items-center gap-4">
                        <span style={styles}>
                            تحديد الموقع
                        </span>
                        <div className="relative w-[63px] h-[60px] rounded-[15px] border-[1px] bg-[#DBEDF6]
                                            transition-colors duration-200 cursor-pointer custom-hover"
                             style={{
                                 '--hover-bg': 'white',
                                 borderColor: TEXT_COLORS.primary,
                             }}
                        >
                            <img
                                className="absolute object-cover right-1/2 transform translate-x-1/2 top-1/2 -translate-y-1/2"
                                src={map}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PropertyLocation

const styles = {
    color: TEXT_COLORS.secondary,
    fontFamily: 'Cairo',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '3%',
    textAlign: 'right',
}