import React, {useEffect, useState} from 'react';
import {Button, Layout, List, Skeleton, Col,
    Form,
    Input,
    Row,
    Select,} from "antd";
import "./styles/sideBarProfileStyle.css"
import {ArrowLeftOutlined, EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
const { Content } = Layout
const { Option } = Select;

function SideBarProfileComponent(props) {

    const [disabled, setDisabled] = useState(true);
    const navigation = useNavigate()
    return (
        <Content className={"sidebar-menu"}>
            <Button className={"sidebar-back-button"} onClick={() => navigation("/")} icon={<ArrowLeftOutlined />} size={48} />

            <Content className={"sidebar-profile-imgblock"}>
                <img src={"https://imgholder.ru/200x200/8493a8/adb9ca&text=avatar"} className={"image-profile"}/>
            </Content>
            <Content className={'sidebar-profile-info'}>
                <Input placeholder={'Логин'} disabled={disabled} />
                <Input placeholder={'E-Mail'} disabled={disabled}  type={'email'}/>
                <Input.Password
                    placeholder={'Пароль'}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    disabled={disabled}
                />
                <Input prefix="+7" placeholder={'Номер телефона'} disabled={disabled}/>
                <Select
                    defaultValue="Не определен"
                    options={[
                        { value: 'male', label: 'Мужской' },
                        { value: 'female', label: 'Женский' },
                        { value: 'other', label: 'Другой' },
                    ]}
                    disabled={disabled}
                    />
            </Content>
            <div className={'sidebar-profile-section__button'}>
                <Button className={'sidebar-profile-button__change'} onClick={() => setDisabled(false)}>Редактировать</Button>
                <Button className={'sidebar-profile-button__save'} onClick={() => setDisabled(true)}>Сохранить</Button>
            </div>
        </Content>
    );
}

export default SideBarProfileComponent;
