import React from 'react';
import {Button, Typography} from 'antd';
import {Card} from "antd";
import {useNavigate} from "react-router-dom";
import "./styles/cardLessonStyle.css"
import {useDispatch, useSelector} from "react-redux";
import {updateSelectedCourse} from "../../store/reducers/UserReducer";

const { Title, Paragraph } = Typography;

const CardLessonComponent = ({title, description, photo}) => {

    const navigation = useNavigate()
    const dispatch = useDispatch()

    const selectCourse = () => {
        dispatch(updateSelectedCourse({
            id: 1,
            title: title,
            photo: photo
        }))

        navigation("/course")
    }

    return (
        <Card
            hoverable
            className={"card-wrap-style"}
            cover={<img alt="example" height={230} src={photo} />}
        >
            <Title level={2}>{title}</Title>
            <Paragraph>{description}</Paragraph>
            <Button onClick={selectCourse}>Просмотреть</Button>
        </Card>
    );
};

export default CardLessonComponent;
