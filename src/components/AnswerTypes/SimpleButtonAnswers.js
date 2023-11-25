import React, {useEffect, useState} from 'react';
import {Button, Layout} from "antd";
import {useDispatch} from "react-redux";
import {
    removeAnswer,
    updateAnswers,
    updateCurrentQuestion,
    updateCurrentTesting
} from "../../store/reducers/UserReducer";
const { Content } = Layout

/**
 * @param data [{questions: [], validAnswer: ""}]
 * @returns {JSX.Element}
 * @constructor
 */

const SimpleButtonAnswers = ({data}) => {


    return (
        <div></div>
    );
};

export default SimpleButtonAnswers;
