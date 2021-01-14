import React from 'react';
import { Col, Divider, Button } from 'antd';
import './About.css';
const cn = 'about';

export default function About(props) {

    const { data } = props;

    return (
        <div className={cn}>
            <Col span={10} offset={7}>
                {
                    data.map( (el, i) => {
                        return (
                            <div className={cn+'__card'} key={i}>
                                <h1 style={{marginBottom: '20px'}}>{el.fullname}</h1>
                                <div style={{marginBottom: '10px'}}>{el.address}</div>
                                <div>Компьютеров: {el.computers}</div>
                                <div>Работаем с {el.period} года</div>
                            </div>
                        );
                    })
                }
            </Col>
        </div>
    );

}
