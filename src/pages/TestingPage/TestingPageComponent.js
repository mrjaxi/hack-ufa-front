import React, {useEffect, useState} from 'react';
import "./styles/testingPageStyle.css"
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import {Button, Image, Layout, Result, Typography} from "antd";
import MainContentBlock from "../../modules/ContentBlockBase/MainContentBlock";
import TestingProgressComponent from "../../components/TestingProgress/TestingProgressComponent";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {updateAnswers, updateCurrentQuestion} from "../../store/reducers/UserReducer";
const {Content} = Layout
const { Title, Paragraph } = Typography;

const TestingPageComponent = () => {

    const questions = useSelector(state => state.UserReducer.currentTesting)
    const correct = useSelector(state => state.UserReducer.answers)
    const nav = useNavigate()

    const dispatch = useDispatch()
    const [select, setSelect] = useState(true)
    const selectAnswer = () => {
        dispatch(updateCurrentQuestion())
        console.log(select.isCorrect)
        if (select.isCorrect) {
            dispatch(updateAnswers(select.isCorrect))
        }
    }

    if (questions === null) {
        return nav("/")
    } else {
        return (
            <Layout className={"layout-wrap"}>
                <HeaderComponent/>
                {
                    questions.currentAnswer === questions.questions.length ?
                        <MainContentBlock component={
                            <Layout className={"main-content-testing"}>
                                <Result
                                    status="success"
                                    icon={<img className={"success-image-end"} src={"https://i.imgur.com/wE5M0Kf.png"}/>}
                                    title={<Title level={2}>Вы успешно прошли опрос</Title>}
                                    subTitle={<Paragraph className={"result-end-point"}>Вы ответили правильно на {correct.length} из {questions.questions.length} вопросов</Paragraph>}
                                    extra={[
                                        <Button onClick={() => nav("/")} className={"btn-sizes-end"} type="primary" key="console">
                                            На главную
                                        </Button>,
                                        <Button className={"btn-sizes-end"} key="buy">Начать заново</Button>,
                                    ]}
                                />
                            </Layout>
                        } />
                    :
                        <MainContentBlock component={
                            <Layout className={"main-content-testing"}>
                                <TestingProgressComponent
                                    items={questions.questions.map((item) => ({key: item.title, title: item.title}))}/>
                                <Content style={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <Title>Вопрос</Title>
                                    <Title level={2}>Выбери все верные ответы:</Title>
                                </Content>
                                <Content>
                                    {questions?.questions[questions.currentAnswer].questions.map(item => (
                                        <Button id={item.id} style={{color: select.id === item.id ? "green" : "black"}}
                                                onClick={() => setSelect(item)}
                                                className={"question-button"}>{item.text}</Button>
                                    ))}
                                </Content>
                                <Content className={"question-wrap"}>
                                    <Content>
                                        <Button onClick={selectAnswer} className={"btn-answer"} disabled={select === true} type="primary" size={"large"}>
                                            Готово
                                        </Button>
                                    </Content>
                                </Content>
                            </Layout>
                        }/>
                }
                <FooterComponent/>
            </Layout>
        );
    }
};

export default TestingPageComponent;
