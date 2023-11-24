import React from 'react';
import {Layout} from "antd";
import "./styles/authorizationPageStyle.css"
import CardAuthComponent from '../../components/CardAuth/CardAuthComponent';
import FooterComponent from "../../components/Footer/FooterComponent";
import MainContentBlock from "../../modules/ContentBlockBase/MainContentBlock";

function AuhorizationPageComponent(props) {
    return (
        <Layout className={"layout-wrap"}>
            <MainContentBlock component={
                <Layout className={"layout-wrap-auth"}>
                    <CardAuthComponent/>
                </Layout>
            } />
            <FooterComponent/>
        </Layout>
    );
}

export default AuhorizationPageComponent;
