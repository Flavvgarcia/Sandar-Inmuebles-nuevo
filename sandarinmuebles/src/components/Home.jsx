import React from 'react';
import { Layout, Menu } from 'antd';
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';

const { Header, Content, Footer } = Layout;


const theme = {
  '@primary-color': '#1890ff', // Color primario
  '@font-size-base': '16px', // Tamaño de fuente base
};

function Home() {
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Nosotros</Menu.Item>
          <Menu.Item key="2">Contacto</Menu.Item>
          <Menu.Item key="3">Iniciar Sesión</Menu.Item>
          <Menu.Item key="4">Inmuebles</Menu.Item>
        </Menu>
      </Header>
      <Content>
        {/* Contenido principal de la página */}
        <div className="site-layout-content">
          <LandingPage />
          <AboutUs />
          
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        {/* Pie de página */}
        Inmobiliaria ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
}

export default Home;
