import React from 'react';
import { Layout } from "antd";
import "./styles/footerStyle.css"
const {Footer} = Layout;

const FooterComponent = props => {
    return (
        <Footer className={"footer-wrap"}>
            UFA HACK FRONT PROFI 2023
        </Footer>
    );
};

export default FooterComponent;
