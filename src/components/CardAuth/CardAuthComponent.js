import React from 'react';
import "./styles/cardAuthStyle.css"
import AuthFormComponent from '../../components/AuthForm/AuthFormComponent';
import {Flex, Card, Button} from "antd";
import {useNavigate} from "react-router-dom";

function CardAuthComponent(props) {

    const navigation = useNavigate()

    return (
        <Card className={"card"}>
            <Flex justify={'space-around'} align={'center'}>
                <div className={"card-auth-left_section"}>
                    <p className={'card-title'}>Присоединяйтесь к нашей образовательной платформе и откройте дверь к миру знаний! </p>
                    <p className={'card-text'}>Регистрируйтесь для доступа к увлекательным курсам и персонализированным возможностям.</p>
                    <Button type="primary" htmlType="submit" className="card-auth-button" onClick={() => navigation("/reg")}>
                        Зарегистрироваться
                    </Button>  
                </div>
                <AuthFormComponent/>
            </Flex>
        </Card>

    );
}

export default CardAuthComponent;
