import React from 'react';
import {Layout, Menu} from "antd";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";
import { Typography } from 'antd';

import "./styles/mainContentStyle.css"
import CardLessonComponent from "../CardLessons/CardLessonComponent";
import fishData from "../../utils/fishData";
const { Title, Paragraph } = Typography;

const { Content, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});

function MainContentBlock(props) {
    return (
        <Content>
            <Layout className={"main-content-wrap"}>
                {/*<Sider*/}
                {/*    style={{*/}
                {/*        background: "white",*/}
                {/*    }}*/}
                {/*    width={200}*/}
                {/*>*/}
                {/*    <Menu*/}
                {/*        mode="inline"*/}
                {/*        defaultSelectedKeys={['1']}*/}
                {/*        defaultOpenKeys={['sub1']}*/}
                {/*        style={{*/}
                {/*            height: '100%',*/}
                {/*        }}*/}
                {/*        items={items2}*/}
                {/*    />*/}
                {/*</Sider>*/}
                <Content>
                    <Title>Доступные курсы</Title>
                </Content>
                <Content className={"main-content-cards"}>
                    {
                        fishData.map(item => (
                            <CardLessonComponent title={item.title} description={item.desctiption} photo={item.img}/>
                        ))
                    }
                </Content>
            </Layout>
        </Content>
    );
}

export default MainContentBlock;
