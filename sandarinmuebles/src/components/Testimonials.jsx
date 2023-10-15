import React from 'react';
import { Typography, Card, Row, Col, Rate, Avatar } from 'antd';
import './Testimonials.css';

const { Title, Paragraph } = Typography;

const Testimonials = () => {
    const testimonies = [
        {
            id: 1,
            name: 'Juan Pérez',
            stars: 5,
            content: '¡Gran experiencia trabajando con Sandar Inmuebles! El equipo es muy profesional y atento.',
            avatar: 'https://www.coopacsancristobal.pe/wp-content/uploads/2020/07/business-man.png',
        },
        {
            id: 2,
            name: 'Maria López',
            stars: 4,
            content: 'Encontré mi hogar perfecto gracias a Sandar Inmuebles. ¡Altamente recomendado!',
            avatar: 'https://www.aaconsultancy.ae/dubai/wp-content/uploads/2021/12/10-useful-tips-for-women-owned-businesses.jpg',
        },
        // Agrega más testimonios con imágenes de prueba
    ];

    return (
        <div className="testimonials-container">
            <Title level={2}>Testimonios de Clientes</Title>
            <Row gutter={16} justify="center">
                {testimonies.map((testimony) => (
                    <Col key={testimony.id} xs={24} sm={12} md={8}>
                        <Card className="testimony-card" hoverable>
                            <div className="testimony-avatar-container">
                                <Avatar src={testimony.avatar} size={64} className="testimony-avatar" />
                            </div>
                            <Rate disabled allowHalf value={testimony.stars} />
                            <Paragraph className="testimony-content">{testimony.content}</Paragraph>
                            <p className="testimony-name">{testimony.name}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Testimonials;
