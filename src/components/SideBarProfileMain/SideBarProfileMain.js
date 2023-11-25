import React, {useEffect, useState} from 'react';
import "./styles/sideBarProfileMainStyle.css";
import {List, Layout, Typography, message, Skeleton, Divider, Avatar} from "antd";
import InfiniteScroll from 'react-infinite-scroll-component';
import SideBarElement from "../../components/SideBarElement/SideBarElement";
import ProgressBarElement from '../ProgressBarElement/ProgressBarElement';
const { Content } = Layout;
const { Title } = Typography;

const SideBarProfileMain = () => {

    return (
        <Content className={"main-content-course"}>
            <Title level={4}>Прогресс по курсам:</Title>
            {/* {
                for (let i = 0; i < 0; i++) {
                    {<ProgressBarElement /> }
                }
            } */}
            
            <ProgressBarElement 
                courseName={'Название курса'}
                completedModules={'9'}
                allModules={'11'}
                />
                        <ProgressBarElement 
                courseName={'Название курса'}
                completedModules={'3'}
                allModules={'5'}
                />
                            <ProgressBarElement 
                courseName={'Название курса'}
                completedModules={'1'}
                allModules={'20'}
                />            
                <ProgressBarElement 
                courseName={'Название курса'}
                completedModules={'11'}
                allModules={'11'}
                />
            {/* <div
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
            </div> */}
        </Content>
    );
};

export default SideBarProfileMain;
