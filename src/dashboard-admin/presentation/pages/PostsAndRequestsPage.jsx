import {useState} from "react";
import Header from "../../../shared/presentation/components/Header.jsx";
import {CustomTabPanel, Tabs} from "../../../shared/presentation/components/Tabs.jsx";
import Post from "../components/postsAndRequests/Post.jsx";

const PostsAndRequestsPage = () => {
    const tabs = ['المنشورات', 'طلبات النشر'];
    const [tab, setTab] = useState(0);
    const posts = [
        {
            id: 1,
            type: "بيع",
            location: "دمشق, مزة",
            budget: 120000,
            publishedDate: "2025-08-10",
            description: "شقة للبيع بمساحة واسعة في وسط المدينة"
        },
        {
            id: 2,
            type: "إيجار",
            location: "حلب, السيف",
            budget: 4500,
            publishedDate: "2025-07-25",
            description: "مكتب للإيجار في منطقة تجارية حيوية"
        },
        {
            id: 3,
            type: "بيع",
            location: "حمص, الشارع الجديد",
            budget: 200000,
            publishedDate: "2025-06-15",
            description: "فيلا فاخرة للبيع مع حديقة خاصة"
        },
        {
            id: 4,
            type: "إيجار",
            location: "السويداء, المركز",
            budget: 6000,
            publishedDate: "2025-05-30",
            description: "محل تجاري للإيجار في مركز تسوق مشهور"
        },
        {
            id: 5,
            type: "بيع",
            location: "دمشق, باب توما",
            budget: 95000,
            publishedDate: "2025-08-01",
            description: "شقة جديدة للبيع قريبة من المدارس والجامعات"
        }
    ];


    return (
        <div className="flex flex-col">
            <Header title={'المنشورات والطلبات'}/>
            <Tabs tabs={tabs} minWidth={"50px"} border={false} tab={tab} setTab={setTab}
                  tabHeight={'45px'} bgHeight={'65px'} borderRadius={'15px'}/>

            <div className="p-1 w-full h-full">
                {/*المنشورات*/}
                <CustomTabPanel value={tab} index={0}>
                    <div className="p-4 flex flex-row flex-wrap gap-4">
                        {posts.map((post) => (
                            <Post post={post}/>
                        ))}
                    </div>
                </CustomTabPanel>

                {/*طلبات النشر*/}
                <CustomTabPanel value={tab} index={1}>
                    <div className="p-4 flex flex-row flex-wrap gap-4">
                        {posts.map((post) => (
                            <Post post={post} onAccept={() => {}} onReject={() => {}}/>
                        ))}
                    </div>
                </CustomTabPanel>
            </div>
        </div>
    )
}
export default PostsAndRequestsPage
