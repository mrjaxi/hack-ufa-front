import React from 'react';
import {Button, Typography} from 'antd';
import {Card} from "antd";
import {useNavigate} from "react-router-dom";
import "./styles/cardLessonStyle.css"

const { Title, Paragraph } = Typography;

const CardLessonComponent = ({title, description, photo}) => {

    const navigation = useNavigate()

    return (
        <Card
            hoverable
            className={"card-wrap-style"}
            cover={<img alt="example" height={230} src={photo} />}
        >
            <Title level={2}>{title}</Title>
            <Paragraph>{description}</Paragraph>
            <Button onClick={() => navigation("/course")}>Просмотреть</Button>
        </Card>
    );
};

export default CardLessonComponent;
