import React from 'react';
import "./styles/styleHeader.css"
import {Layout, Dropdown, Button} from "antd";
import { UserOutlined } from '@ant-design/icons';


const {Header} = Layout;

const items = [
    {
      key: '1',
      label: (
        <a target="_self" rel="noopener noreferrer" href="/profile">
          Профиль
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_self" rel="noopener noreferrer" href="/">
          Курсы
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_self" rel="noopener noreferrer" href="/auth">
          Выйти
        </a>
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
