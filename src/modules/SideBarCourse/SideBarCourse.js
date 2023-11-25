import React, {useEffect, useState} from 'react';
import {Button, Divider, Layout, List, Skeleton, Typography} from "antd";
import "./styles/sideBarStyles.css"
import SideBarElement from "../../components/SideBarElement/SideBarElement";
import InfiniteScroll from "react-infinite-scroll-component";
import {useNavigate} from "react-router-dom";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {getAllModules} from "../../api/getAllModules";
const { Content } = Layout
const { Title } = Typography;

function SideBarCourse(props) {

    const userCourse = useSelector(state => state.UserReducer.currentSelectedCourse)

    const [loading, setLoading] = useState(false);
    // const [data, setData] = useState([]);

    const [data, setData] = useState()

    // const loadMoreData = () => {
    //     if (loading) {
    //         return;
    //     }
    //     setLoading(true);
    //     fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
    //         .then((res) => res.json())
    //         .then((body) => {
    //             setData([...data, ...body.results]);
    //             setLoading(false);
    //         })
    //         .catch(() => {
    //             setLoading(false);
    //         });
    // };

    const loadMoreData = async () => {
        setLoading(true)
        const response = await getAllModules(userCourse.id)
        setData(response)
        console.log(response)
        setLoading(false)
    }

    useEffect(() => {
        loadMoreData();
    }, []);

    const navigation = useNavigate()
    return (
        <Content className={"sidebar-menu"}>
            <Content>
                <Button className={"sidebar-back-button"} onClick={() => navigation("/")} icon={<ArrowLeftOutlined />} size={48} />
                <img src={userCourse.photo} className={"image-course"}/>
            </Content>
            <div
                id="scrollableDiv"
                className={"side-bar-elements"}
            >
                <Title level={4}>Список тем: </Title>
                {
                    data ?

                <InfiniteScroll
                    dataLength={data.length}
                    next={loadMoreData}
                    scrollableTarget="scrollableDiv"
                >
                    <List
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item key={item.email}>
                                <SideBarElement title={item.title} id={item.courseID}/>
                            </List.Item>
                        )}
                    />
                </InfiniteScroll> :
                        <Skeleton
                            avatar
                            paragraph={{
                                rows: 1,
                            }}
                            active
                        />
                }
            </div>
        </Content>
    );
}

export default SideBarCourse;
