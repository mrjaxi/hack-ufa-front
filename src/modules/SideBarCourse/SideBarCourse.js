import React from 'react';
import {Layout, List} from "antd";
import "./styles/sideBarStyles.css"
const { Content } = Layout

function SideBarCourse(props) {
    return (
        <Content className={"sidebar-menu"}>
            <img src={"https://i.pinimg.com/originals/7b/9c/29/7b9c29758c9057d0c3523b03bc8263bb.jpg"} className={"image-course"}/>
            <List>
                {/*<VirtualList*/}
                {/*    data={data}*/}
                {/*    height={ContainerHeight}*/}
                {/*    itemHeight={47}*/}
                {/*    itemKey="email"*/}
                {/*    onScroll={onScroll}*/}
                {/*>*/}

                {/*</VirtualList>*/}
            </List>
        </Content>
    );
}

export default SideBarCourse;
