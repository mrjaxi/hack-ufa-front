import React from 'react';
import "./styles/cardAuthStyle.css"
import AuthFormComponent from '../../components/AuthForm/AuthFormComponent';
import {Flex, Card, Button} from "antd";

function CardAuthComponent(props) {
    return (
        
        <Card
            className={"card"}
        >
            <Flex justify={'space-around'} align={'center'}>
                <div className={"card-auth-left_section"}>
                    <p>Крупный текст</p>
                    <p>Текст поменьше</p>
                    <Button type="primary" htmlType="submit" className="card-auth-button">
                    Зарегистрироваться
                    </Button>
                </div>
                
                <AuthFormComponent/>
            </Flex>
        </Card>
      
    );
}

export default CardAuthComponent;
