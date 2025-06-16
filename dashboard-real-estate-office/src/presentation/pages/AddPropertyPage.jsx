import Header from "../components/shared/Header.jsx";
import PostDetails from "../components/addProperty/PostDetails.jsx";
import PropertyImages from "../components/addProperty/PropertyImages.jsx";
import PropertyDetails from "../components/addProperty/PropertyDetails.jsx";

const AddPropertyPage = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="-mb-6">
                <Header title={'إضافة عقار'}/>
            </div>
            <PostDetails/>
            <div className="flex flex-row gap-4 mx-6 flex-wrap">
                <div className="flex-5">
                    <PropertyDetails/>
                </div>
                <div className="flex-2">
                    <PropertyImages/>
                </div>
            </div>
        </div>
    )
}
export default AddPropertyPage
