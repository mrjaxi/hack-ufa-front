import React from 'react';
import {Layout} from "antd";
import "./styles/regPageStyle.css"
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import RegFormComponent from '../../components/RegForm/RegFormComponent';
import MainContentBlock from "../../modules/ContentBlockBase/MainContentBlock";


const { Content } = Layout;

function RegPageComponent(props) {
    return (
        <Layout className={"layout-wrap"}>
            <HeaderComponent />
            <MainContentBlock component={
                <Layout className={"content-wrap-reg"}>
                    <RegFormComponent />
                </Layout>   
        } />
            {/* <Content className={"content-wrap-reg"}>
                <RegFormComponent />
            </Content> */}
            <FooterComponent />
        </Layout>
    );
}

export default RegPageComponent;
