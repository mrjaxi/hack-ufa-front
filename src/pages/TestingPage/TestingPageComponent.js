import React, {useEffect} from 'react';
import "./styles/testingPageStyle.css"
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import {Layout, Typography} from "antd";
import MainContentBlock from "../../modules/ContentBlockBase/MainContentBlock";
import TestingProgressComponent from "../../components/TestingProgress/TestingProgressComponent";
import TestingQuestionsBlock from "../../modules/TestingQuestionsBlock/TestingQuestionsBlock";
import SimpleButtonAnswers from "../../components/AnswerTypes/SimpleButtonAnswers";
import {useSelector} from "react-redux";
const {Content} = Layout
const { Title } = Typography;

const TestingPageComponent = () => {

    const questions = useSelector(state => state.UserReducer.currentTesting)

    return (
        <Layout className={"layout-wrap"}>
            <HeaderComponent />
            <MainContentBlock component={
                <Layout className={"main-content-testing"}>
                    <TestingProgressComponent items={questions.questions.map((item) => ({ key: item.title, title: item.title }))} />
                    <Content style={{ display: "flex", alignItems: "center", flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Title>Вопрос</Title>
                        <Title level={2}>Выбери все верные ответы:</Title>
                    </Content>
                    <TestingQuestionsBlock component={
                            <SimpleButtonAnswers data={questions.questions[0]}/>
                        }
                    />
                </Layout>
            }/>
            <FooterComponent />
        </Layout>
    );
};

export default TestingPageComponent;
