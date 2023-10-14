import React from 'react';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function Contact() {
  return (
    <Content>
      <div className="site-layout-content">
        <Title level={2}>Contacto</Title>
        <Paragraph>
          {/* Información de contacto y formulario de contacto si es necesario */}
        </Paragraph>
      </div>
    </Content>
  );
}

export default Contact;
