import Header from "../../../../shared/presentation/components/dashboard/Header.jsx";
import OfficeCard from "../shared/OfficeCard.jsx";

const MostRatedOffices = ({popular}) => {

    return (
        <div className="flex flex-col max-w-screen">
            <Header name={'المكاتب الأكثر تقييماً'}/>

            <div className="flex overflow-x-auto p-2 gap-3.5">
                {popular?.map(({logo, type, name, location, rate, id}) => (
                    <OfficeCard type={type} name={name} location={location} rate={rate} id={id} image={logo}
                                officeType={"real-estate"}/>
                ))}
            </div>
        </div>
    )
}
export default MostRatedOffices
