import React from 'react';
import {Divider, Layout} from "antd";
import "./styles/profilePageStyle.css"
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import MainContentBlock from '../../modules/ContentBlockBase/MainContentBlock';
import SideBarProfileComponent from '../../components/SideBarProfile/SideBarProfileComponent';
import SideBarProfileMain from '../../components/SideBarProfileMain/SideBarProfileMain';
import SideBarProfileAdmin from '../../components/SideBarProfileAdmin/SideBarProfileAdmin';

const { Content } = Layout;

function ProfilePageComponent(props) {
    return (
        <Layout className={"layout-wrap"}>
            <HeaderComponent />
            <MainContentBlock title={"Профиль"} component={
                    <Content className={"layout-wrap-items"}>
                        <SideBarProfileComponent/>
                        <Divider type={"vertical"}/>
                        {/* <SideBarProfileMain /> */}
                        <SideBarProfileAdmin/>
                    </Content>
                }/>
            <FooterComponent />
        </Layout>
    );
}

export default ProfilePageComponent;
