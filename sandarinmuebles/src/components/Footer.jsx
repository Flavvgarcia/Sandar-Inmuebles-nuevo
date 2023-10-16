import React from 'react';
import { Layout, Button, Input } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const { Footer: AntFooter } = Layout;

function Footer() {
  const handleSelectableClick = (text) => {
    alert(`Clic en: ${text}`);
  };

  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 30px',
  };

  const iconStyle = {
    fontSize: '50px',
    color: '#3498db',
  };

  const linkStyle = {
    color: '#3498db',
    cursor: 'pointer',
    textDecoration: 'none',
    padding: '5px',
  };

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const socialIconsStyle = {
    fontSize: '24px',
    color: '#fff',
    margin: '0 10px',
  };

  const copyrightStyle = {
    color: 'gray',
    textAlign: 'center',
  };

  const subscribeButtonStyle = {
    color: '#fff',
    backgroundColor: '#3498db',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginRight: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
  };

  const subscribeContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  return (
    <AntFooter style={footerStyle}>
      <div style={iconContainerStyle}>
        <div style={{ flex: 1, textAlign: 'left' }}>
          <AntDesignOutlined style={iconStyle} />
          <p style={{ color: '#f0f2f5' }}>
            Descubre tu hogar ideal con nosotros. Nuestro compromiso es ayudarte a encontrar la propiedad que siempre has soñado. Contáctanos hoy y deja que hagamos realidad tus sueños inmobiliarios.
          </p>
        </div>
        <div style={{ flex: 1, textAlign: 'left', marginLeft: '20px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><span style={linkStyle} onClick={() => handleSelectableClick('Inicio')}>Inicio</span></li>
          <li><span style={linkStyle} onClick={() => handleSelectableClick('Nosotros')}>Nosotros</span></li>
          <li><span style={linkStyle} onClick={() => handleSelectableClick('Inmuebles')}>Inmuebles</span></li>
          <li><span style={linkStyle} onClick={() => handleSelectableClick('Contactanos')}>Contactanos</span></li>
          <li><span style={linkStyle} onClick={() => handleSelectableClick('Servicios')}>Servicios</span></li>
          </ul>
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={subscribeContainerStyle}>
          <Button style={subscribeButtonStyle}>
          <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>Suscribirse</span>
          </Button>
            <Input placeholder="Correo Electrónico" style={inputStyle} />
          </div>
          <FontAwesomeIcon icon={faYoutube} style={socialIconsStyle} />
          <FontAwesomeIcon icon={faWhatsapp} style={socialIconsStyle} />
          <FontAwesomeIcon icon={faEnvelope} style={socialIconsStyle} />
        </div>
      </div>
      <hr style={{ borderColor: '#ccc' }} />
      <div style={copyrightStyle}>
        Copyright 2023 © Todos los Derechos Reservados del Diseño por Imagine Codes
      </div>
    </AntFooter>
  );
}

export default Footer;