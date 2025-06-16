import Header2 from "./Header2.jsx";
import space from "../../../assets/properties/space.svg";
import ownership from "../../../assets/properties/ownership.svg";
import side from "../../../assets/properties/side.svg";
import furnishings from "../../../assets/properties/furnishings.svg";
import rooms from "../../../assets/properties/rooms.svg";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";
import SelectInput from "../shared/SelectInput.jsx";

const GeneralDetails = () => {
    return (
        <div className='flex flex-col gap-2'>
            <Header2 title={'تفاصيل عامة:'}/>
            <div className="flex flex-col gap-2 mt-2">
                {
                    items.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-1.5">
                                <div className="flex flex-row flex-wrap gap-16 items-center">
                                    <img
                                        src={item.icon}
                                        className='w-[25px] h-[25px]'
                                    />

                                    <span style={styles} className="min-w-[136px]">{item.title}</span>

                                    {
                                        item.field === 'text' ?
                                            (<input
                                                type={item.type}
                                                className='rounded-[15px] border-[1px] min-h-[50px] pl-4 pr-4 w-full max-w-[210px]'
                                                style={{
                                                    backgroundColor: BACKGROUND_COLORS.app,
                                                    borderColor: TEXT_COLORS.primary,
                                                    fontFamily: 'Cairo',
                                                    fontWeight: '400',
                                                    fontSize: '18px',
                                                    lineHeight: '130%',
                                                    letterSpacing: '2%',
                                                    textAlign: (item.type === 'number' ? 'center' : 'right'),
                                                    verticalAlign: 'middle'
                                                }}
                                            />) :
                                            <SelectInput options={item.options} height={'50px'} maxWidth={'210px'}
                                                         style={{
                                                             borderWidth: '1px',
                                                             fontWeight: 600,
                                                             color: TEXT_COLORS.primary,
                                                             fontSize: '18px'
                                                         }}/>
                                    }

                                    <span style={styles}>{item.additionalData}</span>
                                </div>

                                <div className="w-full h-[1px]" style={{backgroundColor: BACKGROUND_COLORS.picture}}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default GeneralDetails

const styles = {
    color: TEXT_COLORS.primary,
    fontFamily: 'Cairo',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '100%',
    letterSpacing: '0%',
    textAlign: 'center',
    verticalAlign: 'middle'
}

const items = [
    {icon: space, title: 'المساحة', field: 'text', type: 'number', additionalData: 'بالمتر'},
    {icon: ownership, title: 'نوع الملكية', field: 'select', options: []},
    {icon: side, title: 'الجهة', field: 'text', type: 'text'},
    {icon: furnishings, title: 'الفرش', field: 'select', options: []},
    {icon: rooms, title: 'عدد الغرف', field: 'text', type: 'number'},
]