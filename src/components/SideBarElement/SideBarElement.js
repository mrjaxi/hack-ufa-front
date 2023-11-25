import React from 'react';
import {Button, Layout, Tag, Typography} from "antd";
import {FolderOutlined} from "@ant-design/icons";
import "./styles/sideBarElementStyle.css"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateCurrentTesting} from "../../store/reducers/UserReducer";
import testData from "../../utils/testData";

const SideBarElement = ({title, id}) => {

    const navigation = useNavigate()
    const dispatch = useDispatch()

    const selectCurrentTest = () => {
        // получаем данные с апи...
        dispatch(updateCurrentTesting(testData))
        navigation("/testing")
    }

    return (
        <Button id={id} onClick={selectCurrentTest} type={"text"} className={"side-bar-element-style"}>
            <FolderOutlined />
            <p>{title}</p>
            <Tag color="red">Сложно</Tag>
        </Button>
    );
};

export default SideBarElement;
