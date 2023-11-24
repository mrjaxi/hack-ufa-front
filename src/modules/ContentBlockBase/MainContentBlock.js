import React from 'react';
import {Layout} from "antd";
import { Typography } from 'antd';

import "./styles/mainContentStyle.css"
const { Title } = Typography;

const { Content } = Layout;

function MainContentBlock({title, component}) {
    return (
        <Content>
            <Layout className={"main-content-wrap"}>
                {
                    title &&
                    <Content>
                        <Title>{title}</Title>
                    </Content>

                }
                {
                    component
                }
            </Layout>
        </Content>
    );
}

export default MainContentBlock;
