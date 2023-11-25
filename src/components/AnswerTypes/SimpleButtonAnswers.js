import React, {useEffect, useState} from 'react';
import {Button, Layout} from "antd";
import {useDispatch} from "react-redux";
import {removeAnswer, updateAnswers} from "../../store/reducers/UserReducer";
const { Content } = Layout

/**
 * @param data [{questions: [], validAnswer: ""}]
 * @returns {JSX.Element}
 * @constructor
 */

const SimpleButtonAnswers = ({data}) => {
    const dispatch = useDispatch()

    const [selected, setSelected] = useState(false);
    const selectAnswer = (id) => {
        if (!selected) {
            dispatch(updateAnswers({answerID: id, answer: id}))
            setSelected(true)
        } else {
            dispatch(removeAnswer({answerID: id, answer: id}))
            setSelected(false)
        }
    }


    return (
        <Content>
            {data?.questions.map(item => (
                <Button onClick={() => selectAnswer(item)} className={"question-button" + (selected ? "btn-selected" : "")}>{item}</Button>
            ))}
        </Content>
    );
};

export default SimpleButtonAnswers;
