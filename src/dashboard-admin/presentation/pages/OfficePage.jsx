import {useEffect, useState} from 'react'
import Header from "../../../shared/presentation/components/Header.jsx";
import {CustomTabPanel, Tabs} from "../../../shared/presentation/components/Tabs.jsx";
import {useNavigate, useParams, useSearchParams} from "react-router";
import GeneralDetails from "../components/offices/GeneralDetails.jsx";
import Logo from "../../../shared/presentation/components/office/Logo.jsx";
import PropertyRentCard from "../../../shared/presentation/components/properties/PropertyRentCard.jsx";
import PropertySaleTouristCard from "../../../shared/presentation/components/properties/PropertySaleTouristCard.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import useDataStore from "../../application/state/useDataStore.jsx";
import {getOffice} from "../../application/useCases/partnersManagement/getOfficeUseCase.jsx";
import {getServiceProvider} from "../../application/useCases/partnersManagement/getServiceProviderUseCase.jsx";

const OfficePage = () => {
    const [tab, setTab] = useState(0);
    const {id} = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const {isLoading, setIsLoading} = useLoadingStore();
    const {data, setDataForTab} = useDataStore();
    const {notifyError} = useNotification();

    useEffect(() => {
            const officeType = searchParams.get("officeType");
            if (officeType !== 'real-estate' && officeType !== 'service-provider') {
                navigate("/admin/offices");
            }
            setIsLoading(true);
            const fetchData = async () => {
                let result;
                switch (tab) {
                    case 0:
                        switch (officeType) {
                            case "real-estate":
                                result = await getOffice(id);
                                break;
                            case "service-provider":
                                result = await getServiceProvider(id);
                        }
                        break;
                    case 1:
                        // result = await getProperties(id);
                        break;
                }
                if (result?.success) {
                    if (tab === 0) {
                        setDataForTab(0, [result.response.data]);
                    } else {
                        setDataForTab(1, []);
                    }
                } else {
                    notifyError(result?.response?? "حدث خطأ");
                }
                setIsLoading(false);
            }
            fetchData();
        }, [searchParams, navigate, tab]
    )
    ;

    const name = (searchParams.get("officeType") === 'real-estate') ? 'المكتب' : 'مزود الخدمة';
    const tabs = [`معلومات ${name}`, ...(name === 'المكتب' ? ['العقارات'] : [])];

    return (
        <div className="flex flex-col">
            <Header title={'المكاتب الوسيطة'}/>
            <Tabs tabs={tabs} minWidth={"50px"} border={false} tab={tab} setTab={setTab}
                  tabHeight={'45px'} bgHeight={'65px'} borderRadius={'15px'}/>

            {(isLoading || !data) ? <Spinner/> :
                <div className="p-4 w-full h-full">
                    {/*معلومات المكتب*/}
                    <CustomTabPanel value={tab} index={0}>
                        <div className="flex flex-row flex-wrap gap-5 h-auto">
                            <div className="flex-5">
                                <GeneralDetails readOnly={true} name={name}
                                                office={data[0]?.[0]}/>
                            </div>
                            <div className="flex flex-col gap-4 w-[290px] flex-2">
                                <Logo office={{image: data[0]?.[0]?.logo}} name={name} readOnly={true}/>
                            </div>
                        </div>
                    </CustomTabPanel>

                    {/*العقارات*/}
                    <CustomTabPanel value={tab} index={1}>
                        <div className="flex flex-row flex-wrap gap-5 h-auto">
                            {/*{properties.map((property) => (*/}
                            {/*    <div key={property.id} className="flex-shrink-0">*/}
                            {/*        {(property.listing_type === 'أجار') ? (*/}
                            {/*            <PropertyRentCard property={property}/>*/}
                            {/*        ) : (*/}
                            {/*            <PropertySaleTouristCard property={property} type={'sale'}/>*/}
                            {/*        )}*/}
                            {/*    </div>*/}
                            {/*))}*/}
                        </div>
                    </CustomTabPanel>
                </div>
            }
        </div>
    )
}
export default OfficePage
