import React, {useEffect, useState} from 'react';
import {Avatar, Button, Divider, Layout, List, message, Skeleton, Typography} from "antd";
import VirtualList from 'rc-virtual-list';
import "./styles/sideBarStyles.css"
import SideBarElement from "../../components/SideBarElement/SideBarElement";
import InfiniteScroll from "react-infinite-scroll-component";
import {useNavigate} from "react-router-dom";
import {ArrowLeftOutlined} from "@ant-design/icons";
const { Content } = Layout
const { Title } = Typography;

const fakeDataUrl =
    'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 250;

function SideBarCourse(props) {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
            .then((res) => res.json())
            .then((body) => {
                setData([...data, ...body.results]);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };
    useEffect(() => {
        loadMoreData();
    }, []);

    const navigation = useNavigate()
    return (
        <Content className={"sidebar-menu"}>
            <Content>
                <Button className={"sidebar-back-button"} onClick={() => navigation("/")} icon={<ArrowLeftOutlined />} size={48} />
                <img src={"https://i.pinimg.com/originals/7b/9c/29/7b9c29758c9057d0c3523b03bc8263bb.jpg"} className={"image-course"}/>
            </Content>
            <div
                id="scrollableDiv"
                className={"side-bar-elements"}
            >
                <Title level={4}>Список тем: </Title>
                <InfiniteScroll
                    dataLength={data.length}
                    next={loadMoreData}
                    hasMore={data.length < 50}
                    loader={
                        <Skeleton
                            avatar
                            paragraph={{
                                rows: 1,
                            }}
                            active
                        />
                    }
                    endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                    scrollableTarget="scrollableDiv"
                >
                    <List
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item key={item.email}>
                                <SideBarElement />
                            </List.Item>
                        )}
                    />
                </InfiniteScroll>
            </div>
        </Content>
    );
}

export default SideBarCourse;
