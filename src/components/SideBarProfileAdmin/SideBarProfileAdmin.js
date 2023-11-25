import React, {useEffect, useState} from 'react';
import "./styles/sideBarProfileAdminStyle.css";
import {List, Layout, Typography, message, Skeleton, Divider, Avatar, Button} from "antd";
import InfiniteScroll from 'react-infinite-scroll-component';
import SideBarElement from "../../components/SideBarElement/SideBarElement";
import ProgressBarElement from '../ProgressBarElement/ProgressBarElement';
import { PlusOutlined } from '@ant-design/icons';
import CourseElement from '../CourseElement/CourseElement';

const { Content } = Layout;
const { Title } = Typography;

const SideBarProfileAdmin = () => {

    return (
        <Content className={"main-content-course"}>
            <Button icon={<PlusOutlined />} />
            <Title level={4}>Доступные курсы</Title>
            <CourseElement
                courseName='Математика'
            />
                        <CourseElement
                courseName='Русский язык'
            />
                        <CourseElement
                courseName='Информатика'
            />
        </Content>
    );
};

export default SideBarProfileAdmin;
