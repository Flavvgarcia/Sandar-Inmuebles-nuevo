import React, { useEffect, useState } from 'react';
import { Layout, Typography, Button, Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import banner1 from '../assets/img/houses/banner.jpg';
import banner3 from '../assets/img/houses/banner-3.jpg';
import banner2 from '../assets/img/houses/banner-4.jpg';
import ReactPlayer from 'react-player';
import ImageCarousel from './ImageCarousel';
import './LandingPage.css';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function LandingPage() {
    const [showFirstImage, setShowFirstImage] = useState(true);
    const [currentImage, setCurrentImage] = useState(1);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleVideoPlay = () => {
        setIsVideoPlaying(true);
    };

    useEffect(() => {
        const bannerImages = document.querySelectorAll('.landing-page-banner-image');
        const totalImages = bannerImages.length;
        let currentIndex = currentImage;

        const changeImage = () => {
            if (showFirstImage) {
                setShowFirstImage(false); // Desactiva el efecto en la primera imagen después del primer cambio
            }
            bannerImages[currentIndex].style.opacity = '0';
            currentIndex = (currentIndex + 1) % totalImages;
            bannerImages[currentIndex].style.opacity = '1';
            setCurrentImage(currentIndex);
        };

        const initialDelay = 5000; // Retraso inicial para cambiar la primera imagen
        const interval = setInterval(changeImage, initialDelay); // Cambia la primera imagen con retraso

        return () => {
            clearInterval(interval);
        };
    }, [currentImage, showFirstImage]);

    return (
        <Content>
            <div className="landing-page-container">
                <div className="landing-page-banner">
                    <div className={`landing-page-banner-image ${showFirstImage ? "show-first-image" : ""}`} style={{ backgroundImage: `url(${banner1})` }}>
                        <div className="image-overlay"></div>
                    </div>
                    <div className="landing-page-banner-image" style={{ backgroundImage: `url(${banner2})` }}>
                        <div className="image-overlay"></div>
                    </div>
                    <div className="landing-page-banner-image" style={{ backgroundImage: `url(${banner3})` }}>
                        <div className="image-overlay"></div>
                    </div>
                    <Col span={24}>
                        <div className="banner-content">
                            <h1 className="banner-title">Bienvenido a Sandar Inmuebles</h1>
                            <p className="banner-description">Encuentra la casa de tus sueños con nosotros.</p>
                            <Link to="/inmuebles">
                                <Button size="large" className="banner-button">
                                    Ver Inmuebles
                                </Button>
                            </Link>
                        </div>
                    </Col>

                </div>
                <div className="contact-section">
                    <div className="whatsapp-info">
                        <h2>Contacto a WhatsApp</h2>
                        <p>¡Estamos disponibles para ayudarte! Escríbenos por WhatsApp y te atenderemos rápidamente.</p>
                        <a href="https://api.whatsapp.com/send?phone=4434395522" target="_blank" rel="noopener noreferrer">
                            <Button type="primary" size="large">WhatsApp</Button>
                        </a>
                    </div>
                    <div className="video-button">
                        <h2>Ver Video</h2>
                        <p>Explora nuestros servicios y propiedades en este video.</p>
                        <Button type="primary" size="large" onClick={() => handleVideoPlay()}>Reproducir Video</Button>
                        {isVideoPlaying && (
                            <div className="video-player">
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=g21bC8DuhDM&ab_channel=Dinamical"
                                    playing
                                    controls
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="image-carousel-container">
                    <ImageCarousel />
                </div>
                <div className="additional-content">
                    <Row gutter={32}>
                        <Col span={8}>
                            <Card className="landing-page-card" title="Nuestros Servicios">
                                <p>Ofrecemos una amplia variedad de servicios de bienes raíces para satisfacer tus necesidades.</p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card className="landing-page-card" title="Atención Personalizada">
                                <p>Nuestro equipo de profesionales está disponible para brindarte asesoramiento personalizado en todo momento.</p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card className="landing-page-card" title="Contacto">
                                <p>¿Tienes alguna pregunta? No dudes en ponerte en contacto con nosotros.</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </Content>
    );
}

export default LandingPage;
