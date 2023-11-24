import React from 'react';
import "./styles/styleHeader.css"
import {Layout, Menu} from "antd";

const {Header} = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

function HeaderComponent(props) {
    return (
        <Header
            className={"wrap"}
        >
            <span className={"logo"}>LOGO</span>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
    );
}

export default HeaderComponent;
