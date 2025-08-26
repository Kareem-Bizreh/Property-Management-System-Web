import {BACKGROUND_COLORS} from "../../../../shared/colors.jsx";
import Header from "../../../../dashboard-real-estate-office/presentation/components/officeInfo/Header.jsx";
import SelectInput from "../../../../shared/presentation/components/SelectInput.jsx";
import useServiceProviderStore from "../../../application/state/serviceProvider/useServiceProviderStore.jsx";

const ServiceStatus = () => {
    const {serviceProvider, setServiceProvider} = useServiceProviderStore();

    return (
        <div className="flex flex-col flex-1 items-center rounded-[25px] p-4 max-h-[390px]"
             style={{backgroundColor: BACKGROUND_COLORS.secondary2}}
        >
            <Header title="حالة الخدمة" fontSize={'18px'}/>
            <div className="flex items-center justify-center w-full h-full">
                <SelectInput height={'60px'} maxWidth="70%" style={{borderWidth: '1px'}}
                             onChange={(status) =>
                                 setServiceProvider({...serviceProvider, status: status === 'متوفرة'})}
                             options={['متوفرة', 'غير متوفرة']}
                             title={serviceProvider.status ? 'متوفرة' : 'غير متوفرة'}/>
            </div>
        </div>
    )
}
export default ServiceStatus
