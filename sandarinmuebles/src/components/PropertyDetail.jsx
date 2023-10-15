import React from 'react';
import { Layout, Row, Col, Button, Typography, Image, Form, Input, message, Carousel } from 'antd';
import { useParams } from 'react-router-dom';
import { InfoCircleOutlined, HomeOutlined, DollarCircleOutlined, SolutionOutlined, 
  LikeOutlined, AreaChartOutlined, CalendarOutlined, StarOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Text } = Typography;

const PropertyDetail = () => {
  const { id } = useParams();

  // Mock data: Reemplaza esto con tus datos reales
  const propertyData = [
    {
      id: 1,
      type: 'Casa',
      price: 250000,
      state: 'Disponible',
      description: 'Esta es una hermosa casa en una ubicación increíble...',
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      yearBuilt: 2000,
      images: [
        'https://julioros.com/wp-content/uploads/2013/06/IMG_3610.jpg',
        'https://julioros.com/wp-content/uploads/2013/06/IMG_3610.jpg',
      ],
    },
    {
      id: 2,
      type: 'Apartamento',
      price: 150000,
      state: 'En proceso',
      description: 'Amplio apartamento con vista al mar...',
      bedrooms: 2,
      bathrooms: 1,
      area: 120,
      yearBuilt: 2010,
      images: [
        'https://julioros.com/wp-content/uploads/2013/06/IMG_3610.jpg',
        'https://julioros.com/wp-content/uploads/2013/06/IMG_3610.jpg',
      ],
    },
    // Agrega más propiedades
  ];

  const propertyDetails = propertyData.find((property) => property.id.toString() === id);

  const handleContactFormSubmit = (values) => {
    // Aquí puedes manejar el envío del formulario de contacto
    // Por ahora, mostraremos un mensaje de éxito.
    message.success('¡Tu mensaje ha sido enviado con éxito!');
  };

  return (
    <Content>
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Carousel>
            {propertyDetails.images.map((image, index) => (
              <Image key={index} src={image} alt={`Image ${index}`} />
            ))}
          </Carousel>
          <Text strong>Descripción:</Text> {propertyDetails.description}
        </Col>
        <Col xs={24} md={12}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Title level={2}>{propertyDetails.type}</Title>
            <Row gutter={8}>
              <Col span={12}>
                <DollarCircleOutlined />
                <Text strong>Precio:</Text> ${propertyDetails.price}
              </Col>
              <Col span={12}>
                <HomeOutlined />
                <Text strong>Estado:</Text> {propertyDetails.state}
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={12}>
                <SolutionOutlined />
                <Text strong>Habitaciones:</Text> {propertyDetails.bedrooms}
              </Col>
              <Col span={12}>
                <LikeOutlined />
                <Text strong>Baños:</Text> {propertyDetails.bathrooms}
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={12}>
                <AreaChartOutlined />
                <Text strong>Tamaño:</Text> {propertyDetails.area} m²
              </Col>
              <Col span={12}>
                <CalendarOutlined />
                <Text strong>Año de construcción:</Text> {propertyDetails.yearBuilt}
              </Col>
            </Row>
            <Form name="contact-form" onFinish={handleContactFormSubmit}>
              <Form.Item name="name" label="Nombre" rules={[{ required: true, message: 'Por favor, ingresa tu nombre' }]}>
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="Correo Electrónico"
                rules={[
                  { required: true, message: 'Por favor, ingresa tu correo electrónico' },
                  { type: 'email', message: 'Ingresa un correo electrónico válido' }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="message"
                label="Mensaje"
                rules={[{ required: true, message: 'Por favor, ingresa tu mensaje' }]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Enviar Mensaje
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </Content>
  );
};

export default PropertyDetail;
