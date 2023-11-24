import React from 'react';
import {Divider, Layout} from "antd";
import "./styles/coursePageStyle.css"
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import MainContentBlock from "../../modules/ContentBlockBase/MainContentBlock";
import SideBarCourse from "../../modules/SideBarCourse/SideBarCourse";
import SideBarMainComponent from "../../modules/SideBarMain/SideBarMainComponent";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function CoursePageComponent(props) {

    const nav = useNavigate()
    const userCourse = useSelector(state => state.UserReducer.currentSelectedCourse)

    if (userCourse !== null) {
        return (
            <Layout className={"layout-wrap"}>
                <HeaderComponent/>
                <MainContentBlock title={userCourse.title} component={
                    <Layout className={"layout-wrap-items"}>
                        <SideBarCourse/>
                        <Divider type={"vertical"}/>
                        <SideBarMainComponent/>
                    </Layout>
                }/>
                <FooterComponent/>
            </Layout>
        );
    } else {
        nav("/")
    }
}

export default CoursePageComponent;
