import React from 'react';
import {Divider, Layout} from "antd";
import "./styles/coursePageStyle.css"
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import MainContentBlock from "../../modules/ContentBlockBase/MainContentBlock";
import SideBarCourse from "../../modules/SideBarCourse/SideBarCourse";
import SideBarMainComponent from "../../modules/SideBarMain/SideBarMainComponent";

function CoursePageComponent(props) {
    return (
        <Layout className={"layout-wrap"}>
            <HeaderComponent />
            <MainContentBlock title={"Математика"} component={
                <Layout className={"layout-wrap-items"}>
                    <SideBarCourse />
                    <Divider type={"vertical"} />
                    <SideBarMainComponent />
                </Layout>
            }/>
            <FooterComponent/>
        </Layout>
    );
}

export default CoursePageComponent;
