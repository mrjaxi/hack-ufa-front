import React from 'react';
import {Button, Layout} from "antd";
const { Content } = Layout

const TestingQuestionsBlock = ({component}) => {
    return (
        <Content className={"question-wrap"}>
            {
                component
            }
            <Content>
                <Button disabled={true} type="primary" size={"large"}>
                    Готово
                </Button>
            </Content>
        </Content>
    );
};

export default TestingQuestionsBlock;
