import React from 'react';
import {Layout} from "antd";
import "./styles/mainPageStyle.css"
import HeaderComponent from "../../components/Header/HeaderComponent";
import MainContentBlock from "../../modules/ContentBlockBase/MainContentBlock";
import FooterComponent from "../../components/Footer/FooterComponent";
import fishData from "../../utils/fishData";
import CardLessonComponent from "../../components/CardLessons/CardLessonComponent";
const { Content } = Layout;

function MainPageComponent(props) {
    return (
        <Layout className={"layout-wrap-main"}>
            <HeaderComponent />
            <MainContentBlock title={"Доступные курсы"} component={
                <Content className={"main-content-cards"}>
                    {
                        fishData.map(item => (
                            <CardLessonComponent title={item.title} description={item.desctiption} photo={item.img}/>
                        ))
                    }
                </Content>
            }/>
            <FooterComponent />
        </Layout>
    );
}

export default MainPageComponent;
