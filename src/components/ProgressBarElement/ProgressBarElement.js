import React from 'react';
import {Button, Progress } from "antd";
import "./styles/progressBarElementStyle.css"
import {useNavigate} from "react-router-dom";

const ProgressBarElement = props => {

    const navigation = useNavigate()

    return (
        <Button onClick={() => navigation("/course")} type={"text"} className={"side-bar-element-style"}>
            <p>{props.courseName}</p>
            <p>{props.completedModules}/{props.allModules}</p>
            <div className={'progressbar'}>
                <Progress percent={parseInt(props.completedModules/props.allModules*100)} size="small"/>
            </div>
        </Button>
    );
};

export default ProgressBarElement;
