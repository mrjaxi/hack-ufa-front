import React, {useEffect, useState} from 'react';
import {Layout, Skeleton} from "antd";
import "./styles/mainPageStyle.css"
import HeaderComponent from "../../components/Header/HeaderComponent";
import MainContentBlock from "../../modules/ContentBlockBase/MainContentBlock";
import FooterComponent from "../../components/Footer/FooterComponent";
import CardLessonComponent from "../../components/CardLessons/CardLessonComponent";
import { getAllCoursesRequest } from '../../api/getAllCourses';

const { Content } = Layout;


function MainPageComponent(props) {

    const [data, setData] = useState()

    useEffect(() => {
        fetchCourses().then(r => r)
    }, [])

    async function fetchCourses(){
        const courses = await getAllCoursesRequest()
        console.log(courses)
        setData(courses)
      }

    return (
        <Layout className={"layout-wrap-main"}>
            <HeaderComponent />
            <MainContentBlock title={"Доступные курсы"} component={
                <Content className={"main-content-cards"}>
                    {
                        data ?
                        data.map(item => (
                            <CardLessonComponent title={item.subject} description={item.description} photo={item.photoData}/>
                        )) :
                            <Skeleton style={{ height: "100%" }} />
                    }
                </Content>
            }/>
            <FooterComponent />
        </Layout>
    );
}

export default MainPageComponent;
