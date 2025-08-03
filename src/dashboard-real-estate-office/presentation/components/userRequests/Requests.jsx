import RequestCard from "./RequestCard.jsx";
import useUserPostsStore from "../../../application/state/userPost/useUserPostsStore.jsx";

const Requests = () => {
    const {userPosts} = useUserPostsStore();

    return (
        <div
            className="p-4 flex flex-row flex-wrap gap-4 justify-center"
        >
            {
                userPosts.map((post) => (
                    <RequestCard key={post.id} post={post}/>
                ))
            }
        </div>
    )
}
export default Requests
