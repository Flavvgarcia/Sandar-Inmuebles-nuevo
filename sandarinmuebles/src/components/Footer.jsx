import React from 'react';
import { Layout } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;

function Footer() {
  const handleSelectableClick = (text) => {
    alert(`Clic en: ${text}`);
  };

  return (
    <AntFooter style={{ backgroundColor: '#b5b5b5' }}>
      <div style={{ textAlign: 'center', color: '#fff' }}>
        <AntDesignOutlined style={{ fontSize: '50px', color: '#fff' }} />
        <p style={{ color: '#f0f2f5' }}>Descubre tu hogar ideal con nosotros. 
        Nuestro compromiso es ayudarte a encontrar la propiedad que siempre has soñado. 
        Contáctanos hoy y deja que hagamos realidad tus sueños inmobiliarios.</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span
            style={{
              color: '#FFD700',
              cursor: 'pointer',
              textDecoration: 'none',
              padding: '5px',
            }}
            onClick={() => handleSelectableClick('Inicio')}
          >
            Inicio
          </span>
          <div style={{ margin: '0 10px', borderLeft: '1px solid #ccc', height: '30px' }}></div>
          <span
            style={{
              color: '#FFD700',
              cursor: 'pointer',
              textDecoration: 'none',
              padding: '5px',
            }}
            onClick={() => handleSelectableClick('Nosotros')}
          >
            Nosotros
          </span>
          <div style={{ margin: '0 10px', borderLeft: '1px solid #ccc', height: '30px' }}></div>
          <span
            style={{
              color: '#FFD700',
              cursor: 'pointer',
              textDecoration: 'none',
              padding: '5px',
            }}
            onClick={() => handleSelectableClick('Inmuebles')}
          >
            Inmuebles
          </span>
          <div style={{ margin: '0 10px', borderLeft: '1px solid #ccc', height: '30px' }}></div>
          <span
            style={{
              color: '#FFD700',
              cursor: 'pointer',
              textDecoration: 'none',
              padding: '5px',
            }}
            onClick={() => handleSelectableClick('Testimonios')}
          >
            Testimonios
          </span>
          <div style={{ margin: '0 10px', borderLeft: '1px solid #ccc', height: '30px' }}></div>
          <span
            style={{
              color: '#FFD700',
              cursor: 'pointer',
              textDecoration: 'none',
              padding: '5px',
            }}
            onClick={() => handleSelectableClick('Contactanos')}
          >
            Contactanos
          </span>
        </div>
        <hr style={{ margin: '20px 0', borderColor: '#ccc' }} />
        <p style={{ color: 'gray' }}>Copyright 2023 © Todos los Derechos Reservados del Diseño por Imagine Codes</p>
      </div>
    </AntFooter>
  );
}

export default Footer;
