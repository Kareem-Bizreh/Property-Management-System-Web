import Header from "../../../../shared/presentation/components/dashboard/Header.jsx";
import OfficeCard from "../shared/OfficeCard.jsx";

const MostRatedOffices = () => {
    const offices = [
        {id: 1, type: 'سياحي', name: 'كريم البزرة', location: 'دمشق, المزة', rate: 4.75},
        {id: 2, type: 'عقاري', name: 'ليلى حداد', location: 'دمشق, باب توما', rate: 4.6},
        {id: 3, type: 'سياحي', name: 'سامر خليل', location: 'دمشق, برزة', rate: 4.8},
        {id: 4, type: 'عقاري', name: 'رنا يعقوب', location: 'دمشق, الميدان', rate: 4.7},
        {id: 5, type: 'سياحي', name: 'أنس الزعيم', location: 'دمشق, القابون', rate: 4.5},
    ];

    return (
        <div className="flex flex-col max-w-screen">
            <Header name={'المكاتب الأكثر تقييماً'}/>

            <div className="flex overflow-x-auto p-2 gap-3.5">
                {offices.map(({image, type, name, location, rate, id}) => (
                    <OfficeCard type={type} name={name} location={location} rate={rate} id={id} image={image}/>
                ))}
            </div>
        </div>
    )
}
export default MostRatedOffices
