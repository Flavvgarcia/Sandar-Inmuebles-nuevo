import React, { useState } from 'react';
import { Layout, Typography, List, Collapse, Divider, Form, Input, Button, Drawer, Tabs } from 'antd';
import './Contact.css';

import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  QuestionCircleOutlined,
  HomeOutlined,
  CloseOutlined,
  UserOutlined,
  PlusOutlined,
  CheckCircleOutlined,
  EyeOutlined,
  EnvironmentTwoTone, // Icono adicional
} from '@ant-design/icons';

const { Content } = Layout;
const { Title } = Typography;
const { TextArea } = Input;
const { Panel } = Collapse;
const { TabPane } = Tabs;

function Contact() {
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  // Función para manejar el envío del formulario
  const submitFormToServer = (values) => {
    // Aquí puedes agregar la lógica para enviar el formulario al servidor
    console.log('Formulario enviado:', values);
    setDrawerVisible(false);
  };

  return (
    <Content className="contact-content">
      <div className="contact-container">
        <Title level={2} className="contact-title">
          Contacto
        </Title>
        <Button type="primary" onClick={() => setDrawerVisible(true)}>
          Contactar
        </Button>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Información de Contacto" key="1">
            <List
              header={<strong><EnvironmentOutlined /> Oficina Principal</strong>}
              bordered
              dataSource={[
                <span><EnvironmentOutlined /> Dirección: 123 Calle Principal, Ciudad</span>,
                <span><PhoneOutlined /> Teléfono: (123) 456-7890</span>,
              ]}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
            <Divider />
            <List
              header={<strong><EnvironmentOutlined /> Oficina de Ventas</strong>}
              bordered
              dataSource={[
                <span><EnvironmentOutlined /> Dirección: 456 Avenida Principal, Ciudad</span>,
                <span><PhoneOutlined /> Teléfono: (987) 654-3210</span>,
              ]}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </TabPane>

          <TabPane tab="Horarios de Atención" key="2">
            <div className="contact-hours">
              <Title level={3}>Horarios de Atención</Title>
              <Collapse accordion>
                <Panel header={<span><ClockCircleOutlined /> Lunes a Viernes: 9:00 AM - 6:00 PM</span>} key="1">
                  Nuestro equipo está disponible de lunes a viernes.
                </Panel>
                <Panel header={<span><ClockCircleOutlined /> Sábados: 10:00 AM - 2:00 PM</span>} key="2">
                  Los sábados también estamos aquí para ayudarte.
                </Panel>
                <Panel header={<span><ClockCircleOutlined /> Domingos: Cerrado</span>} key="3">
                  Los domingos estamos cerrados, pero puedes dejarnos un mensaje.
                </Panel>
              </Collapse>
            </div>
          </TabPane>
          <TabPane tab="Preguntas Frecuentes" key="3">
            <div className="contact-faq">
              <Title level={3}>Preguntas Frecuentes</Title>
              <Collapse>
                <Panel header={<span><QuestionCircleOutlined /> ¿Cuál es el proceso para comprar una vivienda?</span>} key="1">
                  <p>El proceso de compra implica la búsqueda, la negociación y el cierre. ¡Estamos aquí para guiarte en cada paso!</p>
                </Panel>
                <Panel header={<span><QuestionCircleOutlined /> ¿Cómo puedo programar una cita para ver una propiedad?</span>} key="2">
                  <p>Utiliza nuestro formulario de contacto o llámanos para programar una cita conveniente.</p>
                </Panel>
                <Panel header={<span><QuestionCircleOutlined /> ¿Cuáles son los requisitos para obtener una hipoteca?</span>} key="3">
                  <p>Los requisitos varían, pero generalmente incluyen ingresos estables y buen historial crediticio.</p>
                </Panel>
                <Panel header={<span><QuestionCircleOutlined /> ¿Cuáles son las tarifas de envío?</span>} key="4">
                  <p>Las tarifas de envío varían según la ubicación y el método de envío. Consulta nuestra sección de envíos para más información.</p>
                </Panel>
                <Panel header={<span><QuestionCircleOutlined /> ¿Cómo rastreo mi pedido?</span>} key="5">
                  <p>Puedes rastrear tu pedido utilizando el número de seguimiento proporcionado en el correo de confirmación.</p>
                </Panel>
                <Panel header={<span><QuestionCircleOutlined /> ¿Aceptan devoluciones?</span>} key="6">
                  <p>Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra. Consulta nuestra política de devoluciones para más detalles.</p>
                </Panel>
              </Collapse>
            </div>
          </TabPane>
          <TabPane tab="Ubicación" key="4">
            <List
              header={<strong><EnvironmentTwoTone twoToneColor="#52c41a" /> Nuestra Ubicación</strong>}
              bordered
              dataSource={[
                <span><EnvironmentTwoTone twoToneColor="#52c41a" /> Dirección: 789 Calle Secundaria, Ciudad</span>,
                <span><PhoneOutlined /> Teléfono: (123) 555-6789</span>,
              ]}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </TabPane>
        </Tabs>
      </div>
      <Drawer
        title={<span><UserOutlined /> Contacto</span>}
        placement="right"
        width={360}
        closable={true}
        onClose={() => setDrawerVisible(false)}
        visible={isDrawerVisible}
      >
        <Form name="contact-form" onFinish={submitFormToServer} layout="vertical">
          <Form.Item
            label={<span><UserOutlined /> Nombre</span>}
            name="name"
            rules={[{ required: true, message: 'Por favor, ingresa tu nombre' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<span><MailOutlined /> Correo Electrónico</span>}
            name="email"
            rules={[{ required: true, type: 'email', message: 'Por favor, ingresa un correo electrónico válido' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<span><PhoneOutlined /> Teléfono</span>}
            name="phone"
            rules={[{ required: true, message: 'Por favor, ingresa tu número de teléfono' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<span><PlusOutlined /> Mensaje</span>}
            name="message"
            rules={[{ required: true, message: 'Por favor, ingresa tu mensaje' }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Enviar Mensaje
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </Content>
  );
}

export default Contact;
