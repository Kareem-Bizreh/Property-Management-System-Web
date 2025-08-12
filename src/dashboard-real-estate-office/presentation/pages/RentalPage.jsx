import {useParams} from "react-router";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/colors.jsx";
import Header from "../../../shared/presentation/components/Header.jsx";
import TableHead from "../components/rentals/TableHead.jsx";
import FinancialRecord from "../components/shared/FinancialRecord.jsx";
import Rental from "../components/rentals/Rental.jsx";
// import ContractExtension from "../components/rentals/ContractExtension.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import useRentalStore from "../../application/state/rental/useRentalStore.jsx";
import Button from "@mui/material/Button";
// import usePropertyContractOpenStore from "../../application/state/rental/usePropertyContractOpenStore.jsx";
import {useEffect} from "react";
import {getRental} from "../../application/useCases/rentals/getRentalContractsUseCase.jsx";
import {uploadRentalDocument} from "../../application/useCases/rentals/uploadDocumentUseCase.jsx";

const RentalPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore()
    const {id} = useParams();
    const {rental, setRental} = useRentalStore();
    // const {setIsOpen, isOpen} = usePropertyContractOpenStore();

    useEffect(() => {
        const loadRental = async () => {
            setIsLoading(true);
            const {success, response} = await getRental(id);
            if (success) {
                const data = response.data;
                setRental(data);
            } else {
                setRental(null);
                alert(response);
            }
            setIsLoading(false);
        };

        loadRental();
    }, [id]);

    if (isLoading || !rental) return <Spinner/>;

    return (
        <div className="flex flex-col gap-2 mb-4">
            <Header title={'تفاصيل الإيجار'}/>
            <div className="px-6 flex flex-col gap-6">
                <TableHead/>
                <Rental rental={rental}/>
            </div>
            <div className="w-full h-[8px] my-2" style={{backgroundColor: BACKGROUND_COLORS.filter}}/>
            <div className='px-6 flex flex-col gap-6'>
                <div className="flex flex-row flex-wrap px-2">
                    <span className='flex-1'
                          style={{
                              color: TEXT_COLORS.primary,
                              fontFamily: 'Cairo',
                              fontWeight: 700,
                              fontSize: '24px',
                              lineHeight: '100%',
                              letterSpacing: '3%',
                              textAlign: 'right',
                          }}
                    >
                        السجل المالي
                    </span>
                    {/*<Button*/}
                    {/*    onClick={() => setIsOpen(true)}*/}
                    {/*    variant="contained"*/}
                    {/*    sx={{*/}
                    {/*        width: 163,*/}
                    {/*        height: 46,*/}
                    {/*        backgroundColor: BACKGROUND_COLORS.card,*/}
                    {/*        borderRadius: '15px',*/}
                    {/*        fontWeight: 700,*/}
                    {/*        fontSize: '16px',*/}
                    {/*        lineHeight: '100%',*/}
                    {/*        letterSpacing: '3%',*/}
                    {/*        textAlign: 'center'*/}
                    {/*    }}>*/}
                    {/*    تمديد عقد*/}
                    {/*</Button>*/}
                    {/*{isOpen && <ContractExtension/>}*/}
                </div>
                <div className="flex flex-col gap-4">
                    {rental?.invoices.map((item) => (
                        <FinancialRecord record={item} key={item.id} upload={uploadRentalDocument}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default RentalPage
