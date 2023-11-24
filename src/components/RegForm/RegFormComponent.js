import React from 'react';
import "./styles/regFormStyle.css"
import {
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
  } from 'antd';    

  const { Option } = Select;

function RegFormComponent(props) {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };


    return (
        <Form
            // {...formItemLayout}
            // form={form}
            name="register"
            onFinish={onFinish}
            // initialValues={{
            //     residence: ['zhejiang', 'hangzhou', 'xihu'],
            //     prefix: '86',
            // }}
            style={{
                maxWidth: 600,
            }}
            scrollToFirstError
            >
            <Form.Item
                name="login"
                label="Логин"
                rules={[
                {
                    required: true,
                    message: 'Пожалуйста введите ваш логин!',
                    whitespace: true,
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                {
                    type: 'email',
                    message: 'Введенный E-mail неверный!',
                },
                {
                    required: true,
                    message: 'Пожалуйста введите ваш E-mail!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Пароль"
                rules={[
                {
                    required: true,
                    message: 'Пожалуйста введите ваш пароль!',
                },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Подтвердите пароль"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Пожалуйста подтвердите ваш пароль!',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error('Введенные вами пароли не совпадают!'));
                    },
                }),
                ]}
            >
                <Input.Password />
            </Form.Item>


            <Form.Item
                name="phone"
                label="Номер телефона"
                rules={[
                {
                    required: true,
                    message: 'Пожалуйста введите номер телефона!',
                },
                ]}
            >
                <Input
                addonBefore={"+7"}
                style={{
                    width: '100%',
                }}
                />
            </Form.Item>

            {/* <Form.Item
                name="intro"
                label="О себе"
                rules={[
                {
                    required: true,
                    message: 'Расскажите о себе',
                },
                ]}
            >
                <Input.TextArea showCount maxLength={100} />
            </Form.Item> */}

            <Form.Item
                name="gender"
                label="Пол"
                rules={[
                {
                    required: true,
                    message: 'Введите ваш пол!',
                },
                ]}
            >
                <Select placeholder="Выберите ваш пол">
                <Option value="male">Мужской</Option>
                <Option value="female">Женский</Option>
                <Option value="other">Другой</Option>
                </Select>
            </Form.Item>

            <Form.Item label="Captcha" extra="Мы должны убедиться, что вы человек.">
                <Row gutter={8}>
                <Col span={12}>
                    <Form.Item
                    name="captcha"
                    noStyle
                    rules={[
                        {
                        required: true,
                        message: 'Пожалуйста введите каптчу которую вы увидели!',
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Button>CAPTCHA</Button>
                </Col>
                </Row>
            </Form.Item>


            <Form.Item /*{...tailFormItemLayout}*/ className={'section-button'}>
                <Button type="primary" htmlType="submit">
                Зарегистрировать
                </Button>
            </Form.Item>
            </Form>
    );
}

export default RegFormComponent;
