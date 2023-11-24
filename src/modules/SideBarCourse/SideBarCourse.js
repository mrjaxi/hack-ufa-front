import React from 'react';
import { Layout } from "antd";
import "./styles/sideBarStyles.css"
const { Content } = Layout

function SideBarCourse(props) {
    return (
        <Content className={"sidebar-menu"}>
            <img src={"https://i.pinimg.com/originals/7b/9c/29/7b9c29758c9057d0c3523b03bc8263bb.jpg"} className={"image-course"}/>
        </Content>
    );
}

export default SideBarCourse;
