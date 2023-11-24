import React from 'react';
import {Button, Steps, Layout} from "antd";
import {ArrowLeftOutlined, MoreOutlined} from "@ant-design/icons";
import "./styles/testingHeadStyle.css"
import {useNavigate} from "react-router-dom";

const { Content } = Layout


const steps = [
    {
        title: 'Первый вопрос',
        content: 'First-content',
    },
    {
        title: 'Второй вопрос',
        content: 'Second-content',
    },
    {
        title: 'Третий вопрос',
        content: 'Last-content',
    },
];

const items = steps.map((item) => ({ key: item.title, title: item.title }));

const TestingProgressComponent = () => {

    const navigation = useNavigate()

    return (
        <Content className={"main-testing-head"}>
            <Button onClick={() => navigation("/course")} icon={<ArrowLeftOutlined />} size={48} />
            <Steps direction={"horizontal"} className={"main-progress-testing"} current={0} items={items} />
            <Button icon={<MoreOutlined />} size={48} />
        </Content>
    );
};

export default TestingProgressComponent;
