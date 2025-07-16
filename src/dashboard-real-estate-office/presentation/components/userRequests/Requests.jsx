import {propertyPosts} from "../../../shared/constants/properties.jsx";
import RequestCard from "./RequestCard.jsx";

const Requests = () => {
    return (
        <div
            className="p-4 flex flex-row flex-wrap gap-4 justify-center"
        >
            {
                propertyPosts.map((post, index) => (
                    <RequestCard key={index} post={post}/>
                ))
            }
        </div>
    )
}
export default Requests
