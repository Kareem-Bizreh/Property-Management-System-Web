import Service from "./Service.jsx";
import useServiceProvidersStore from "../../../application/state/service-provider/useServiceProvidersStore.jsx";

const Services = () => {

    const {serviceProviders} = useServiceProvidersStore();

    return (
        <div className="flex flex-col px-10 py-4 gap-4">
            {serviceProviders?.map((service) => (
                <Service service={service}/>
            ))}
        </div>
    )
}
export default Services
