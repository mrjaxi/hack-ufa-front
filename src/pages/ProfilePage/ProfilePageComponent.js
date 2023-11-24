import React from 'react';
import {Layout} from "antd";
import "./styles/profilePageStyle.css"
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";

const { Content } = Layout;

function ProfilePageComponent(props) {
    return (
        <Layout className={"layout-wrap"}>
            <HeaderComponent />
            <Content className={"main-content-cards"}>
                
            </Content>
            <FooterComponent />
        </Layout>
    );
}

export default ProfilePageComponent;
