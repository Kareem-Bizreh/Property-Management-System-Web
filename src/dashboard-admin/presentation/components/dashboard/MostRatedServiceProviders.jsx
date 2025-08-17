import Header from "../../../../shared/presentation/components/dashboard/Header.jsx";
import OfficeCard from "../shared/OfficeCard.jsx";

const MostRatedServiceProviders = ({popular}) => {

    return (
        <div className="flex flex-col max-w-screen mr-4">
            <Header name={'مزودي الخدمات الأكثر تقييماً'}/>

            <div className="flex overflow-x-auto p-2 gap-3.5">
                {popular?.map(({logo, career, name, location, rate, id}) => (
                    <OfficeCard type={career} name={name} location={location} rate={rate} id={id} image={logo}
                    officeType={"service-provider"}/>
                ))}
            </div>
        </div>
    )
}
export default MostRatedServiceProviders
