import React, { useState } from 'react';
import { Layout, Row, Col, Select, Card, Slider, Button, Typography, Input, Image } from 'antd';
import {
    HomeOutlined,
    EnvironmentOutlined,
    DollarOutlined,
    TeamOutlined,
    AreaChartOutlined,
    CalendarOutlined,
    CarOutlined,
    FileTextOutlined,
    SearchOutlined,
} from '@ant-design/icons';
import './PropertyList.css';

const { Content } = Layout;
const { Option } = Select;
const { Title, Text } = Typography;

const PropertyList = () => {
    const [filterType, setFilterType] = useState('all');
    const [filterPrice, setFilterPrice] = useState([0, 1000000]);
    const [filterState, setFilterState] = useState('all');

    const mexicanStates = [
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Coahuila',
        'Colima',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'México City',
        'Mexico State',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas',
    ];

    const propertyData = [
        {
            id: 1,
            type: 'Casa',
            price: 750000,
            state: 'Jalisco',
            city: 'Guadalajara',
            rooms: 3,
            bathrooms: 2,
            area: 180,
            yearBuilt: 2005,
            parking: 2,
            description: 'Hermosa casa en un barrio tranquilo.',
            image: 'https://julioros.com/wp-content/uploads/2013/06/IMG_3610.jpg',



        },
        {
            id: 2,
            type: 'Apartamento',
            price: 950000,
            state: 'Nuevo León',
            city: 'Monterrey',
            rooms: 2,
            bathrooms: 1,
            area: 120,
            yearBuilt: 2010,
            parking: 1,
            description: 'Moderno apartamento cerca de la zona financiera.',
            image: 'https://tuinmobiliarioenveracruz.files.wordpress.com/2014/10/2012-11-20-363.jpg?w=736',
        },
        // Agrega más propiedades
    ];

    const [filteredProperties, setFilteredProperties] = useState(propertyData);

    const applyFilters = () => {
        const filtered = propertyData.filter((property) => {
            const isTypeMatch = filterType === 'all' || property.type === filterType;
            const isPriceMatch = property.price >= filterPrice[0] && property.price <= filterPrice[1];
            const isStateMatch = filterState === 'all' || property.state === filterState;

            return isTypeMatch && isPriceMatch && isStateMatch;
        });

        setFilteredProperties(filtered);
    };

    return (
        <Content className="property-list">
            <Title level={3}>Búsqueda de Propiedades</Title>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={6} lg={6}>
                    <Text strong>Tipo de Propiedad</Text>
                    <Select
                        value={filterType}
                        onChange={(value) => setFilterType(value)}
                        style={{ width: '100%' }}
                    >
                        <Option value="all">Todos</Option>
                        <Option value="Casa">Casa</Option>
                        <Option value="Apartamento">Apartamento</Option>
                        {/* Agrega más tipos de propiedad */}
                    </Select>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6}>
                    <Text strong>Rango de Precio</Text>
                    <Slider
                        range
                        min={0}
                        max={1000000}
                        step={10000}
                        value={filterPrice}
                        onChange={(value) => setFilterPrice(value)}
                    />
                </Col>
                <Col xs={24} sm={12} md={6} lg={6}>
                    <Text strong>Estado</Text>
                    <Select
                        value={filterState}
                        onChange={(value) => setFilterState(value)}
                        style={{ width: '100%' }}
                    >
                        <Option value="all">Todos</Option>
                        {mexicanStates.map((state) => (
                            <Option key={state} value={state}>
                                {state}
                            </Option>
                        ))}
                    </Select>
                </Col>
                <Col xs={24} style={{ textAlign: 'center' }}>
                    <Button
                        type="primary"
                        style={{ marginTop: '16px' }}
                        onClick={applyFilters}
                    >
                        <SearchOutlined />
                        Buscar
                    </Button>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                {filteredProperties.map((property) => (
                    <Col xs={24} sm={12} md={8} lg={8} key={property.id}>
                        <Card
                            title={property.type}
                            extra={<a href={`/property/${property.id}`}>Ver detalles</a>}
                        >
                            <Image src={property.image} alt={property.type} preview={false} />
                            <p>
                                <EnvironmentOutlined /> Estado: {property.state}
                            </p>
                            <p>
                                <EnvironmentOutlined /> Ciudad: {property.city}
                            </p>
                            <p>
                                <DollarOutlined /> Precio: ${property.price}
                            </p>
                            <p>
                                <TeamOutlined /> Habitaciones: {property.rooms}
                            </p>
                            <p>
                                <AreaChartOutlined /> Tamaño: {property.area} m²
                            </p>
                            <p>
                                <CalendarOutlined /> Año de construcción: {property.yearBuilt}
                            </p>
                            <p>
                                <CarOutlined /> Estacionamientos: {property.parking}
                            </p>
                            <p>
                                <FileTextOutlined /> Descripción: {property.description}
                            </p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Content>
    );
};

export default PropertyList;
