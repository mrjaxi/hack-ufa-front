import React from 'react';
import {Button, Typography} from 'antd';
import {Card} from "antd";
import {useNavigate} from "react-router-dom";
import "./styles/cardLessonStyle.css"
import {useDispatch, useSelector} from "react-redux";
import {updateSelectedCourse} from "../../store/reducers/UserReducer";

const { Title, Paragraph } = Typography;

const CardLessonComponent = ({id, title, description, photo}) => {

    const navigation = useNavigate()
    const dispatch = useDispatch()

    const selectCourse = () => {
        dispatch(updateSelectedCourse({
            id: id,
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
            <Button style={{ width: "100%", height: 40 }} onClick={selectCourse}>Просмотреть</Button>
        </Card>
    );
};

export default CardLessonComponent;
