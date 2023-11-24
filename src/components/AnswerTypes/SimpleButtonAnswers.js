import React from 'react';
import {Button, Layout} from "antd";
const { Content } = Layout

/**
 * @param data {{questions: [], validAnswer: ""}}
 * @returns {JSX.Element}
 * @constructor
 */

const SimpleButtonAnswers = ({data}) => {
    return (
        <Content>
            {data?.questions?.map(item => (
                <Button className={"question-button"}>{item}</Button>
            ))}
        </Content>
    );
};

export default SimpleButtonAnswers;
