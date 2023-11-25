import React from 'react';
import "./styles/styleHeader.css"
import {Layout, Dropdown, Button} from "antd";
import { UserOutlined } from '@ant-design/icons';
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

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

    const auth = useSelector(state => state.UserReducer.auth)
    const nav = useNavigate()

    return (
        <Header
            className={"wrap"}
        >
            <Link to={'/'} className={"logo"}>
              <img src='https://i.imgur.com/bBWESQk.png' className={'logo-img'} alt='logo'/>
            </Link>

            {
                auth || cookies.get("auth") ?
                <Dropdown menu={{ items }} placement="bottom">
                    <Button shape="circle" icon={<UserOutlined />} />
                </Dropdown> :
                    <a onClick={() => nav("/auth")} className={"login-btn-auth"} type={"text"}>Войти</a>
            }
        </Header>
    );
}

export default HeaderComponent;
