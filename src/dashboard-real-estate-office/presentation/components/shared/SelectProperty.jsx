import {useEffect} from 'react'
import Button from "@mui/material/Button";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import Header from "../../../../shared/presentation/components/Header.jsx";
import Popup from "reactjs-popup";
import usePropertiesStore from "../../../application/state/property/usePropertiesStore.jsx";
import {getFilterProperties} from "../../../application/useCases/residentialOffice/getFilterPropertiesUseCase.jsx";
import usePropertyStore from "../../../application/state/property/usePropertyStore.jsx";
import PropertyCard from "./PropertyCard.jsx";
import usePropertySelectionOpenStore from "../../../application/state/shared/usePropertySelectionOpenStore.jsx";
import useLoadingStore from "../../../../shared/application/state/loadingStore.jsx";
import {Spinner} from "../../../../shared/presentation/components/Spinner.jsx";

const SelectProperty = ({onSelect, listingType}) => {
    const {setIsLoading, isLoading} = useLoadingStore();
    const {setProperties, properties} = usePropertiesStore();
    const {setProperty} = usePropertyStore();
    const {isOpen, setIsOpen} = usePropertySelectionOpenStore();

    useEffect(() => {
        if (!isOpen) return;
        setIsLoading(true);
        const fetchData = async () => {
            const {success, response} = await getFilterProperties({
                listingType,
                status: 'متوفر'
            });
            if (success) {
                setProperties(response.data);
            } else {
                setProperties([]);
                alert(response);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [listingType, isOpen]);

    const handleSelect = (item, close) => {
        setProperty(item);
        onSelect?.(item.id);
        close();
    };

    if (isLoading) return <Spinner/>;

    return (
        <Popup
            open={isOpen}
            onClose={() => setIsOpen(false)}
            modal
            nested
            closeOnDocumentClick
            contentStyle={{
                width: '550px',
                height: '90vh',
                borderRadius: '90px',
                backgroundColor: BACKGROUND_COLORS.app,
                padding: '20px',
                overflow: 'hidden',
            }}
        >
            {(close) => (
                <div className="flex flex-col items-center"
                     style={{
                         color: TEXT_COLORS.secondary,
                         fontFamily: 'Cairo',
                         fontWeight: 700,
                         fontSize: '18px',
                         lineHeight: '100%',
                         letterSpacing: '3%',
                     }}
                >
                    <div className="w-[200px] -mt-1 mr-8">
                        <Header title={'اختيار عقار'}/>
                    </div>

                    <div
                        className="flex-1 overflow-y-auto py-4 w-full"
                        style={{
                            height: 'calc(90vh - 220px)',
                            scrollbarWidth: 'thin',
                        }}
                    >
                        <div className="grid grid-cols-1 gap-4 px-4 h-full">
                            {properties?.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => handleSelect(item, close)}
                                    className="cursor-pointer"
                                >
                                    <PropertyCard property={item}/>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-6 mt-10 mb-2">
                        <Button variant="contained"
                                onClick={close}
                                sx={{
                                    width: 160,
                                    height: 47,
                                    color: BACKGROUND_COLORS.primary,
                                    backgroundColor: BACKGROUND_COLORS.secondary1,
                                    borderRadius: '25px',
                                    ...sharedSx
                                }}>
                            إلغاء
                        </Button>
                    </div>
                </div>
            )}
        </Popup>
    )
};

export default SelectProperty;

const sharedSx = {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '3%',
    textAlign: 'center'
};
