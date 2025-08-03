import Button from "@mui/material/Button";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import Header from "../shared/Header.jsx";
import Popup from "reactjs-popup";
import useSuggestionOpenStore from "../../../application/state/userPost/useSuggestionOpenStore.jsx";
import usePropertyStore from "../../../application/state/property/usePropertyStore.jsx";
import {useEffect} from "react";
import SelectProperty from "../shared/SelectProperty.jsx";
import PropertyCard from "../shared/PropertyCard.jsx";
import useLoadingStore from "../../../../shared/application/state/loadingStore.jsx";
import {suggestProperty} from "../../../application/useCases/userPost/suggestPropertyUseCase.jsx";
import usePropertySelectionOpenStore from "../../../application/state/shared/usePropertySelectionOpenStore.jsx";

const PropertySuggestion = ({userPostId, listingType}) => {
    const {isOpen, setIsOpen, setPostId} = useSuggestionOpenStore();
    const {setIsOpen: setSelectOpen} = usePropertySelectionOpenStore();
    const {property, setProperty} = usePropertyStore();
    const {setIsLoading} = useLoadingStore();

    useEffect(() => setProperty(null), []);

    const suggestPropertyToUser = async () => {
        setIsLoading(true);
        const {success, response} = await suggestProperty(property.id, userPostId);
        setIsLoading(false);
        if (success) {
            setSelectOpen(false)
            setIsOpen(false)
            alert("تم اقتراح العقار بنجاح")
            window.location.reload();
        } else {
            setProperty(null)
            alert(response);
        }
    };

    return (
        <Popup
            open={isOpen}
            onClose={() => {
                setPostId(null);
                setIsOpen(false)
            }}
            modal
            nested
            closeOnDocumentClick
            contentStyle={{
                width: '550px',
                height: '460px',
                borderRadius: '90px',
                backgroundColor: BACKGROUND_COLORS.app,
                padding: '20px',
            }}
        >
            {(close) => (
                <div className="flex flex-col items-center justify-between h-full"
                     style={{
                         color: TEXT_COLORS.secondary,
                         fontFamily: 'Cairo',
                         fontWeight: 700,
                         fontSize: '18px',
                         lineHeight: '100%',
                         letterSpacing: '3%',
                         // textAlign: 'center',
                     }}
                >
                    <div className="w-[200px] -mt-4 -mb-8 mr-6">
                        <Header title={'إقتراح عقار'}/>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span>إختر العقار</span>
                        <div className="w-[383px] h-[120px] flex items-center justify-center">
                            {!property ? (
                                <>
                                    <Button
                                        onClick={() => setSelectOpen(true)}
                                        variant="contained"
                                        sx={{
                                            width: 123,
                                            height: 40,
                                            backgroundColor: BACKGROUND_COLORS.button,
                                            borderRadius: '6px',
                                            fontWeight: 700,
                                            fontSize: '16px',
                                            lineHeight: '100%',
                                            letterSpacing: '3%',
                                            textAlign: 'center'
                                        }}>
                                        اختيار
                                    </Button>
                                    <SelectProperty listingType={listingType}/>
                                </>
                            ) : (
                                <PropertyCard property={property}/>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-6 mb-2">
                        <Button
                            variant="contained"
                            onClick={close}
                            sx={{
                                width: 160,
                                height: 47,
                                color: BACKGROUND_COLORS.primary,
                                backgroundColor: BACKGROUND_COLORS.secondary1,
                                borderRadius: '25px',
                                fontWeight: 700,
                                fontSize: '16px',
                                lineHeight: '100%',
                                letterSpacing: '3%',
                                textAlign: 'center'
                            }}>
                            إلغاء
                        </Button>
                        <Button
                            variant="contained"
                            onClick={suggestPropertyToUser}
                            sx={{
                                width: 160,
                                height: 47,
                                color: BACKGROUND_COLORS.app,
                                backgroundColor: BACKGROUND_COLORS.primary,
                                borderRadius: '25px',
                                fontWeight: 700,
                                fontSize: '16px',
                                lineHeight: '100%',
                                letterSpacing: '3%',
                                textAlign: 'center'
                            }}>
                            إقتراح
                        </Button>
                    </div>
                </div>
            )}
        </Popup>
    )
}
export default PropertySuggestion
