import Header from "../components/shared/Header.jsx";
import PostDetails from "../components/shared/PostDetails.jsx";
import PropertyImages from "../components/shared/PropertyImages.jsx";

const AddTouristPage = () => {
    const tags = [
        {
            id: 2,
            name: "فيلا",
        },
        {
            id: 3,
            name: "مزرعة",
        },
        {
            id: 4,
            name: "مسبح",
        },
    ];

    return (
        <div className="flex flex-col gap-4">
            <div className="-mb-6">
                <Header title={"إضافة مكان سياحي"} />
            </div>
            <PostDetails options={tags} />
            <div className="flex flex-row gap-4 mx-6 flex-wrap">
                <div className="flex-5">
                {/*    */}
                </div>
                <div className="flex-2">
                    <PropertyImages />
                </div>
            </div>
        </div>
    )
}
export default AddTouristPage
