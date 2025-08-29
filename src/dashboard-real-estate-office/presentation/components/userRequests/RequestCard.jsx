import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import placeMarker from "../../../../shared/assets/user-requests/place-marker.svg"
import budgetIcon from '../../../../shared/assets/user-requests/budget.svg'
import {Clock} from "lucide-react";
import {formatPrice} from "../../../../shared/shared/utils/formatPrice.js";
import {formatDate} from "../../../../shared/shared/utils/formatDate.js";
import PropertySuggestion from "./PropertySuggestion.jsx";
import Button from "@mui/material/Button";
import useSuggestionOpenStore from "../../../application/state/userPost/useSuggestionOpenStore.jsx";
import usePropertyStore from "../../../application/state/property/usePropertyStore.jsx";

const RequestCard = ({post: {id, type, location, budget, publishedDate, isProposed, description}}) => {

    const {setIsOpen, setPostId, postId} = useSuggestionOpenStore();
    const {setProperty} = usePropertyStore();

    const data = [
        {key: 'النوع', value: type, icon: null},
        {key: 'المنطقة', value: location, icon: placeMarker},
        {key: 'الميزانية', value: `${formatPrice(budget)} $`, icon: budgetIcon},
    ]

    return (
        <div className="rounded-[30px] w-full min-h-[214px] max-w-[426px] flex flex-col py-4 px-6 gap-2"
             style={{
                 backgroundColor: BACKGROUND_COLORS.secondary2,
                 color: TEXT_COLORS.post,
                 fontFamily: 'Tajawal',
                 fontWeight: 700,
                 fontSize: '14px',
                 lineHeight: '100%',
                 letterSpacing: '3%',
                 textAlign: 'right',
             }}
        >
            <div className="flex flex-col justify-between min-h-[145px]">
                <span style={{fontSize: '16px', lineHeight: '1.4'}}>
                    {description}
                </span>
                <div className="flex flex-col gap-2">
                    {
                        data.map((item, index) => (
                            <div key={index} className="flex flex-row flex-wrap gap-1 items-center">
                                <div className="w-[20px] h-[20px]">
                                    {item.icon && <img src={item.icon} alt={item.title}/>}
                                </div>
                                <span className="w-[60px]">{item.key} :</span>
                                <span style={{fontWeight: 500}}>{item.value}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-row min-w-[220px] h-full justify-between items-end">
                <div className="flex flex-row gap-2">
                    <Clock size={15} color={'#252B5C99'}/>
                    <span style={{fontWeight: 500}}>{formatDate(publishedDate)}</span>
                </div>
                {!isProposed ?
                    <>
                        <Button
                            onClick={() => {
                                setProperty(null);
                                setPostId(id);
                                setIsOpen(true)
                            }}
                            variant="contained"
                            sx={{
                                width: 110,
                                height: 46,
                                backgroundColor: BACKGROUND_COLORS.primary,
                                borderRadius: '25px',
                                fontWeight: 700,
                                fontSize: '18px',
                                lineHeight: '100%',
                                letterSpacing: '3%',
                                textAlign: 'center'
                            }}>
                            إقتراح
                        </Button>
                        {postId === id && (
                            <PropertySuggestion userPostId={id} listingType={type === 'شراء' ? 'بيع' : 'أجار'}/>
                        )}
                    </> :
                    <div className="w-[110px] h-[46px] border-[2px] rounded-[25px] flex items-center justify-center"
                         style={{borderColor: BACKGROUND_COLORS.primary, backgroundColor: BACKGROUND_COLORS.app}}
                    >
                        <span
                            style={{fontSize: '18px', textAlign: 'center', verticalAlign: 'middle'}}
                        >
                            تم الإقتراح
                        </span>
                    </div>
                }
            </div>
        </div>
    )
}
export default RequestCard