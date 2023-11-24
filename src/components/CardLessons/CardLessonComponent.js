import React from 'react';
import { Typography } from 'antd';
import {Card} from "antd";
import "./styles/cardLessonStyle.css"

const { Title, Paragraph } = Typography;

const CardLessonComponent = ({title, description, photo}) => {
    return (
        <Card
            hoverable
            className={"card-wrap-style"}
            cover={<img alt="example" src={photo} />}
        >
            <Title level={2}>{title}</Title>
            <Paragraph>{description}</Paragraph>
        </Card>
    );
};

export default CardLessonComponent;
