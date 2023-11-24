import React from 'react';
import {Layout} from "antd";
import "./styles/regPageStyle.css"
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import RegFormComponent from '../../components/RegForm/RegFormComponent';

const { Content } = Layout;

function RegPageComponent(props) {
    return (
        <Layout className={"layout-wrap"}>
            <HeaderComponent />
            <Content className={"content-wrap-reg"}>
                <RegFormComponent />
            </Content>
            <FooterComponent />
        </Layout>
    );
}

export default RegPageComponent;
