import React, { useEffect, useState } from 'react';
import "./styles/sideBarProfileAdminStyle.css";
import { List, Layout, Typography, message, Skeleton, Divider, Avatar, Button, Modal, Input, Upload } from "antd";
import InfiniteScroll from 'react-infinite-scroll-component';
import SideBarElement from "../../components/SideBarElement/SideBarElement";
import ProgressBarElement from '../ProgressBarElement/ProgressBarElement';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import CourseElement from '../CourseElement/CourseElement';

const { Content } = Layout;
const { Title } = Typography;

const SideBarProfileAdmin = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <Content className={"main-content-course"}>
            <Button icon={<PlusOutlined />} onClick={showModal} />
            <Title level={4}>Доступные курсы</Title>
            <CourseElement
                courseName='Математика'
            />
            <CourseElement
                courseName='Русский язык'
            />
            <CourseElement
                courseName='Информатика'
            />
            <Modal title="Добавить курс" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="Введите название курса" className={'course-input'}/>
                <div className={'uploader'}>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="picture-uploader"
                        showUploadList={false}

                    >
                        <div>
                            <PlusOutlined />
                            <div>
                                Загрузка
                            </div>
                        </div>

                    </Upload>
                </div>
                
            </Modal>
        </Content>
    );
};

export default SideBarProfileAdmin;
