import React from 'react';
import "./styles/styleHeader.css"
import {Layout, Dropdown, Button} from "antd";
import { UserOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";


const {Header} = Layout;

const items = [
    {
      key: '1',
      label: (
        <Link to="/profile">Профиль</Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to="/auth">Выйти</Link>
      ),
    },
  ];

function HeaderComponent(props) {
    return (
        <Header
            className={"wrap"}
        >
            <a className={"logo"} href='/'>
              <img src='https://i.imgur.com/bBWESQk.png' className={'logo-img'} alt='logo'/>
            </a>
            <Dropdown menu={{ items }} placement="bottom">
                <Button shape="circle" icon={<UserOutlined />} />
            </Dropdown>
        </Header>
    );
}

export default HeaderComponent;
