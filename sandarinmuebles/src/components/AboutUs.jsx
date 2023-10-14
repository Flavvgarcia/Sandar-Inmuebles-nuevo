import React, { useEffect } from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import './AboutUs.css';
import './Animation.css';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function AboutUs() {
  // Función para animar el conteo ascendente
  const animateCount = (element, finalValue) => {
    let currentValue = 0;
    const duration = 2000; // Duración de la animación en milisegundos
    const interval = 50; // Intervalo entre incrementos
    const increment = (finalValue / (duration / interval));

    const animation = setInterval(() => {
      currentValue += increment;
      element.innerText = Math.round(currentValue);

      if (currentValue >= finalValue) {
        element.innerText = finalValue;
        clearInterval(animation);
      }
    }, interval);
  };

  useEffect(() => {
    // Obtén las referencias a los elementos span de las estadísticas
    const experienceNumber = document.getElementById('experience-number');
    const salesNumber = document.getElementById('sales-number');

    // Define los números finales
    const finalExperience = 20;
    const finalSales = 1000;

    // Inicia las animaciones cuando el componente se monta
    animateCount(experienceNumber, finalExperience);
    animateCount(salesNumber, finalSales);
  }, []);

  return (
    <Content>
      <div className="about-us-container">
        <Row gutter={32}>
          <Col span={12}>
            <Title level={2} className="about-us-title">
              Sobre Nosotros
            </Title>
            <Paragraph className="about-us-paragraph">
              Somos una empresa de bienes raíces comprometida con la excelencia y la satisfacción del cliente. Nuestro equipo de profesionales tiene una amplia experiencia en el mercado inmobiliario y está aquí para ayudarte en cada paso del proceso.
            </Paragraph>
            <Title level={3} className="about-us-subtitle">
              Experiencia
            </Title>
            <Row gutter={16}>
              <Col span={12}>
                <div className="experience-statistic">
                  <div className="experience-icon">
                    <img src="/assets/img/houses/experience-icon-1.png" alt="Años de Experiencia" />
                  </div>
                  <div className="experience-info">
                    <span id="experience-number">0</span>
                    <p>Años de Experiencia</p>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className="experience-statistic">
                  <div className="experience-icon">
                    <img src="/assets/img/houses/experience-icon-2.png" alt="Inmuebles Vendidos" />
                  </div>
                  <div className="experience-info">
                    <span id="sales-number">0</span>
                    <p>Inmuebles Vendidos</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <div className="about-us-image-collage">
              <img src="/assets/img/houses/image-1.jpg" alt="Imagen 1" className="about-us-image" />
              <img src="/assets/img/houses/image-2.jpg" alt="Imagen 2" className="about-us-image" />
              <img src="/assets/img/houses/image-3.jpg" alt="Imagen 3" className="about-us-image" />
              <img src="/assets/img/houses/image-4.jpg" alt="Imagen 4" className="about-us-image" />
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  );
}

export default AboutUs;
