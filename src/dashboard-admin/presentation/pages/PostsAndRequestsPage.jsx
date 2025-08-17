import {useEffect, useState} from "react";
import Header from "../../../shared/presentation/components/Header.jsx";
import {CustomTabPanel, Tabs} from "../../../shared/presentation/components/Tabs.jsx";
import Post from "../components/postsAndRequests/Post.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import useDataStore from "../../application/state/useDataStore.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";
import {getPosts} from "../../application/useCases/userPosts/getPostsUseCase.jsx";
import {respondToPost} from "../../application/useCases/userPosts/respondToPostUseCase.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";

const PostsAndRequestsPage = () => {
    const tabs = ['المنشورات', 'طلبات النشر'];
    const [tab, setTab] = useState(0);
    const {isLoading, setIsLoading} = useLoadingStore();
    const {data, setDataForTab} = useDataStore();
    const {notifyError, notifySuccess} = useNotification();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            let result;
            switch (tab) {
                case 0:
                    result = await getPosts('مقبول');
                    break;
                case 1:
                    result = await getPosts('قيد الانتظار');
                    break;
            }

            if (result.success) {
                setDataForTab(tab, result.response.data);
            } else {
                setDataForTab(tab, []);
                notifyError(result.response);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [tab]);

    const onAccept = async (id) => {
        setIsLoading(true);
        const {success, response} = await respondToPost(id, true, "");
        if (success) {
            setDataForTab(tab, data[1].filter((item) => item.id !== id));
            notifySuccess("تم القبول بنجاح");
        } else {
            notifyError(response);
        }
        setIsLoading(false);
    }

    const onReject = async (id, reason) => {
        setIsLoading(true);
        const {success, response} = await respondToPost(id, false, reason);
        if (success) {
            setDataForTab(tab, data[1].filter((item) => item.id !== id));
            notifySuccess("تم الرفض بنجاح");
        } else {
            notifyError(response);
        }
        setIsLoading(false);
    }

    return (
        <div className="flex flex-col">
            <Header title={'المنشورات والطلبات'}/>
            <Tabs tabs={tabs} minWidth={"50px"} border={false} tab={tab} setTab={setTab}
                  tabHeight={'45px'} bgHeight={'65px'} borderRadius={'15px'}/>

            {(isLoading || !data) ? <Spinner/> :
                <div className="p-1 w-full h-full">
                    {/*المنشورات*/}
                    <CustomTabPanel value={tab} index={0}>
                        <div className="p-4 flex flex-row flex-wrap gap-4">
                            {data[0]?.map((post) => (
                                <Post post={post}/>
                            ))}
                        </div>
                    </CustomTabPanel>

                    {/*طلبات النشر*/}
                    <CustomTabPanel value={tab} index={1}>
                        <div className="p-4 flex flex-row flex-wrap gap-4">
                            {data[1]?.map((post) => (
                                <Post post={post} onAccept={onAccept} onReject={onReject}/>
                            ))}
                        </div>
                    </CustomTabPanel>
                </div>}
        </div>
    )
}
export default PostsAndRequestsPage
