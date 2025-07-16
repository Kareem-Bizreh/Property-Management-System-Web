import Promotion from "./Promotion.jsx";
import CreateAd from "./CreateAd.jsx";

const AdCreationOptions = () => {
    const price = 200;
    return (
        <div className="w-full min-h-[174px] flex flex-row flex-wrap gap-6 justify-around px-12 mb-4">
            <CreateAd price={price} />
            <Promotion price={price} />
        </div>
    )
}
export default AdCreationOptions
