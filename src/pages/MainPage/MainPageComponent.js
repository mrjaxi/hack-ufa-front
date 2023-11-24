import React from 'react';
import {Layout} from "antd";
import "./styles/mainPageStyle.css"
import HeaderComponent from "../../components/Header/HeaderComponent";
import MainContentBlock from "../../components/ContentBlock/MainContentBlock";
import FooterComponent from "../../components/Footer/FooterComponent";

function MainPageComponent(props) {
    return (
        <Layout className={"layout-wrap"}>
            <HeaderComponent />
            <MainContentBlock />
            <FooterComponent />
        </Layout>
    );
}

export default MainPageComponent;
