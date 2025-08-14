import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import placeMarker from "../../../../shared/assets/user-requests/place-marker.svg"
import budgetIcon from '../../../../shared/assets/user-requests/budget.svg'
import {Clock} from "lucide-react";
import {formatPrice} from "../../../../shared/shared/utils/formatPrice.js";
import {formatDate} from "../../../../shared/shared/utils/formatDate.js";
import Button from "@mui/material/Button";

const Post = ({post: {id, type, location, budget, publishedDate, description}, onReject, onAccept}) => {

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
             key={id}
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
            <div className="flex flex-row flex-wrap items-center justify-between gap-4 h-full">
                <div className="flex flex-row h-full items-end gap-2">
                    <Clock size={15} color={'#252B5C99'}/>
                    <span style={{fontWeight: 500}}>{formatDate(publishedDate)}</span>
                </div>
                {(onAccept && onReject) && <div className="flex flex-col items-center gap-3">
                    <Button variant="contained"
                            onClick={onAccept}
                            sx={{backgroundColor: BACKGROUND_COLORS.accept, ...buttonSx}}
                    >
                        قبول
                    </Button>
                    <Button
                        variant="contained"
                        onClick={onReject}
                        sx={{backgroundColor: BACKGROUND_COLORS.delete, ...buttonSx}}
                    >
                        رفض
                    </Button>
                </div>}
            </div>
        </div>
    )
}
export default Post

const buttonSx = {
    width: 150,
    height: 30,
    borderRadius: '25px',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '100%',
    letterSpacing: '3%',
    textAlign: 'center'
};