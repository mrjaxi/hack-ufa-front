import React from 'react';
import {Layout} from "antd";
import "./styles/authorizationPageStyle.css"
import CardAuthComponent from '../../components/CardAuth/CardAuthComponent';

function MainPageComponent(props) {
    return (

        <Layout className={"layout-wrap"}>
                <CardAuthComponent/>    
        </Layout>
    );
}

export default MainPageComponent;
