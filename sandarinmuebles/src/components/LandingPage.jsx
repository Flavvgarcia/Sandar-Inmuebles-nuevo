import React, { useEffect, useState } from 'react';
import { Layout, Typography, Button, Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import banner1 from '../assets/img/houses/banner.jpg';
import banner3 from '../assets/img/houses/banner-3.jpg';
import banner2 from '../assets/img/houses/banner-4.jpg';
import ReactPlayer from 'react-player';
import ImageCarousel from './ImageCarousel';
import Testimonials from './Testimonials'; // Importa el componente Testimonials
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
                setShowFirstImage(false);
            }
            bannerImages[currentIndex].style.opacity = '0';
            currentIndex = (currentIndex + 1) % totalImages;
            bannerImages[currentIndex].style.opacity = '1';
            setCurrentImage(currentIndex);
        };

        const initialDelay = 5000;
        const interval = setInterval(changeImage, initialDelay);

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
                <Testimonials /> {/* Agrega la sección de testimonios */}
                <div className="contact-section">
                    {/* ... Resto del código de la página de inicio */}
                </div>
                <div className="image-carousel-container">
                    <ImageCarousel />
                </div>
                <div className="additional-content">
                    {/* ... Resto del código de la página de inicio */}
                </div>
            </div>
        </Content>
    );
}

export default LandingPage;
