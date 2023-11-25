import React from 'react';
import {Button, Steps, Layout} from "antd";
import {ArrowLeftOutlined, MoreOutlined} from "@ant-design/icons";
import "./styles/testingHeadStyle.css"
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const { Content } = Layout

const TestingProgressComponent = ({items}) => {

    const navigation = useNavigate()
    const questions = useSelector(state => state.UserReducer.currentTesting)

    return (
        <Content className={"main-testing-head"}>
            <Button onClick={() => navigation("/course")} icon={<ArrowLeftOutlined />} size={48} />
            <Steps direction={"horizontal"} className={"main-progress-testing"} current={0} items={items} />
            <Button icon={<MoreOutlined />} size={48} />
        </Content>
    );
};

export default TestingProgressComponent;
