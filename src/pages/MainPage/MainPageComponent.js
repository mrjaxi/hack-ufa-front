import React, {useEffect} from 'react';
import {Layout} from "antd";
import "./styles/mainPageStyle.css"
import HeaderComponent from "../../components/Header/HeaderComponent";
import MainContentBlock from "../../modules/ContentBlockBase/MainContentBlock";
import FooterComponent from "../../components/Footer/FooterComponent";
import fishData from "../../utils/fishData";
import CardLessonComponent from "../../components/CardLessons/CardLessonComponent";
import { getAllCoursesRequest } from '../../api/getAllCourses';

const { Content } = Layout;


function MainPageComponent(props) {

    useEffect(() => {
        fetchCourses().then(r => r)
    }, [])

    async function fetchCourses(){
        const courses = await getAllCoursesRequest()
        console.log(courses)
      }

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
