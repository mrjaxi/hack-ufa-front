import React from 'react';
import "./styles/testingPageStyle.css"
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import {Layout, Typography} from "antd";
import MainContentBlock from "../../modules/ContentBlockBase/MainContentBlock";
import TestingProgressComponent from "../../components/TestingProgress/TestingProgressComponent";
import TestingQuestionsBlock from "../../modules/TestingQuestionsBlock/TestingQuestionsBlock";
import SimpleButtonAnswers from "../../components/AnswerTypes/SimpleButtonAnswers";
const {Content} = Layout
const { Title } = Typography;

const TestingPageComponent = () => {
    return (
        <Layout className={"layout-wrap"}>
            <HeaderComponent />
            <MainContentBlock component={
                <Layout className={"main-content-testing"}>
                    <TestingProgressComponent />
                    <Content style={{ display: "flex", alignItems: "center", flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Title>Вопрос</Title>
                        <Title level={2}>Выбери все верные ответы:</Title>
                    </Content>
                    <TestingQuestionsBlock component={
                            <SimpleButtonAnswers data={{
                                questions: [1, 1, 1, 1, 1, 1],
                                validAnswer: 1
                            }}/>
                        }
                    />
                </Layout>
            }/>
            <FooterComponent />
        </Layout>
    );
};

export default TestingPageComponent;
