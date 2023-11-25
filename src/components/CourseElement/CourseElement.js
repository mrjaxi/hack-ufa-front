import React from 'react';
import {Button, Progress } from "antd";
import "./styles/courseElementStyle.css"
import {useNavigate} from "react-router-dom";
import { EditOutlined, CloseOutlined } from '@ant-design/icons';

const CourseElement = props => {

    const navigation = useNavigate()

    return (
        <div className={"course-element-style"}>
            <p>{props.courseName}</p>
            <div className={'course-element-buttons'}>
                <Button icon={ <EditOutlined />} onClick={() => navigation("/")} />
                <Button icon={ <CloseOutlined />} />
            </div>

        </div>
    );
};

export default CourseElement;
