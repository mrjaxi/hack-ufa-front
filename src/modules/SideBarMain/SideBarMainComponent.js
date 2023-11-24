import React, {useEffect, useState} from 'react';
import "./styles/sideBarMainStyle.css";
import {List, Layout, Typography, message, Skeleton, Divider, Avatar} from "antd";
import InfiniteScroll from 'react-infinite-scroll-component';
import SideBarElement from "../../components/SideBarElement/SideBarElement";
const { Content } = Layout;
const { Paragraph, Title } = Typography;

const SideBarMainComponent = () => {
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

    return (
        <Content className={"main-content-course"}>
            <Title level={4}>Описание:</Title>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Eget dolor morbi non arcu. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Sed odio morbi quis commodo odio. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Quam quisque id diam vel quam elementum. Risus quis varius quam quisque id. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Diam phasellus vestibulum lorem sed risus. Dui id ornare arcu odio ut sem nulla pharetra. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Sodales neque sodales ut etiam.
            </Paragraph>
            <Title level={4}>Список тестов:</Title>
            <div
                id="scrollableDiv"
                className={"side-bar-main-component"}
            >
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
};

export default SideBarMainComponent;
