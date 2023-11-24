import React from 'react';
import {Layout, Menu} from "antd";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";
import "./styles/mainContentStyle.css"

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
                <Sider
                    style={{
                        background: "white",
                    }}
                    width={200}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                        }}
                        items={items2}
                    />
                </Sider>
                <Content className={"main-content-cards"}>
                    Content
                </Content>
            </Layout>
        </Content>
    );
}

export default MainContentBlock;
