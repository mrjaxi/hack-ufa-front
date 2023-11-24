import React from 'react';
import {Button, Layout, Tag, Typography} from "antd";
import {FolderOutlined} from "@ant-design/icons";
import "./styles/sideBarElementStyle.css"
const { Title, Paragraph } = Typography;

const { Content } = Layout

const SideBarElement = props => {
    return (
        <Button type={"text"} className={"side-bar-element-style"}>
            <FolderOutlined />
            <p>Hello</p>
            <Tag color="red">Сложно</Tag>
        </Button>
    );
};

export default SideBarElement;
