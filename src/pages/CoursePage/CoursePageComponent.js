import React from 'react';
import {Divider, Layout, Typography} from "antd";
import "./styles/coursePageStyle.css"
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import MainContentBlock from "../../modules/ContentBlockBase/MainContentBlock";
import SideBarCourse from "../../modules/SideBarCourse/SideBarCourse";
const { Content, Sider } = Layout;
const { Paragraph } = Typography;

function CoursePageComponent(props) {
    return (
        <Layout className={"layout-wrap"}>
            <HeaderComponent />
            <MainContentBlock title={"Математика"} component={
                <Layout className={"layout-wrap-items"}>
                    <SideBarCourse />
                    <Divider type={"vertical"} />
                    <Content className={"main-content-course"}>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Eget dolor morbi non arcu. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Sed odio morbi quis commodo odio. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Quam quisque id diam vel quam elementum. Risus quis varius quam quisque id. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Diam phasellus vestibulum lorem sed risus. Dui id ornare arcu odio ut sem nulla pharetra. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Sodales neque sodales ut etiam.
                        </Paragraph>
                    </Content>
                </Layout>
            }/>
            <FooterComponent/>
        </Layout>
    );
}

export default CoursePageComponent;
