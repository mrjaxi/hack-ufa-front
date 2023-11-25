import React, { useEffect } from 'react';
import "./styles/authFormStyle.css"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Form, Button, Checkbox, Input } from "antd";
import AuthorizationService from '../../api/AuthorizationService';
import {loginRequest} from "../../api/loginUser";
import {useDispatch} from "react-redux";
import {updateAuth} from "../../store/reducers/UserReducer";
import Cookies from 'universal-cookie';
import {useNavigate} from "react-router-dom";
const cookies = new Cookies();
function AuthFormComponent(props) {

    const dispatch = useDispatch()
    const nav = useNavigate()
    const onFinish = async (data) => {
        const response = await loginRequest(data.username, data.password)
        dispatch(updateAuth(response))
        cookies.set('auth', response.token);
        nav("/")
    }

    return (

    <Form
        name="normal_login"
        className="login-form"
        size='large'
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        >
        <Form.Item
            name="username"
            rules={[
            {
                required: true,
                message: 'Пожалуйста введите свой логин!',
            },
            ]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[
            {
                required: true,
                message: 'Пожалуйста введите свой пароль!',
            },
            ]}
        >
            <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
            />
        </Form.Item>
        <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
            Забыли пароль?
            </a>
        </Form.Item>

        <Form.Item
            className={"login-form-section--button"}
        >
            <Button type="primary" htmlType="submit" className="login-form-button" >
            Войти
            </Button>
        </Form.Item>
        </Form>
    );
}

export default AuthFormComponent;
