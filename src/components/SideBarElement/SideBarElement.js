import React from 'react';
import {Button, Layout, Tag, Typography} from "antd";
import {FolderOutlined} from "@ant-design/icons";
import "./styles/sideBarElementStyle.css"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateCurrentTesting} from "../../store/reducers/UserReducer";
const { Title, Paragraph } = Typography;

const { Content } = Layout

const SideBarElement = props => {

    const navigation = useNavigate()
    const dispatch = useDispatch()

    const selectCurrentTest = () => {
        // получаем данные с апи...
        dispatch(updateCurrentTesting({
            id: 1,
            name: "Name",
            questionCount: 5,
            questions: [
                {
                    id: 1,
                    title: 'Второй вопрос',
                    content: 'Second-content',
                    questions: [24, 64, 35, 1, 235, 23],
                    validAnswer: 1

                },
                {
                    id: 2,
                    title: 'Второй вопрос',
                    content: 'Second-content',
                    questions: [1, 1, 1, 1, 1, 1],
                    validAnswer: 1
                },
                {
                    id: 3,
                    title: 'Второй вопрос',
                    content: 'Second-content',
                    questions: [1, 1, 1, 1, 1, 1],
                    validAnswer: 1
                },
                {
                    id: 4,
                    title: 'Второй вопрос',
                    content: 'Second-content',
                    questions: [1, 1, 1, 1, 1, 1],
                    validAnswer: 1
                },
                {
                    id: 5,
                    title: 'Второй вопрос',
                    content: 'Second-content',
                    questions: [1, 1, 1, 1, 1, 1],
                    validAnswer: 1
                }
            ]
        }))
        navigation("/testing")
    }

    return (
        <Button onClick={selectCurrentTest} type={"text"} className={"side-bar-element-style"}>
            <FolderOutlined />
            <p>Hello</p>
            <Tag color="red">Сложно</Tag>
        </Button>
    );
};

export default SideBarElement;
