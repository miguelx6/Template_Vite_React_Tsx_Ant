import { Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu, Select, ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import { lightTheme } from './shared/assets/js/theme';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Option } = Select;

// Componentes de ejemplo
const Home = () => {
  const { t } = useTranslation();
  return <h2>{t('home')}</h2>
}
const About = () => {
  const { t } = useTranslation();
  return <h2>{t('about')}</h2>
}
const Contact = () => {
  const { t } = useTranslation();
  return <h2>{t('contact')}</h2>
}

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ConfigProvider theme={lightTheme}>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1 }}>
              <Menu.Item key="1"><Link to="/">{t('home')}</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/about">{t('about')}</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/contact">{t('contact')}</Link></Menu.Item>
            </Menu>
            <Select defaultValue={i18n.language} style={{ width: 120 }} onChange={changeLanguage}>
              <Option value="en">English</Option>
              <Option value="es">Español</Option>
            </Select>
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280, marginTop: 16 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Your App ©{new Date().getFullYear()} Created by You</Footer>
      </Layout>
    </ConfigProvider>
  )
}

export default App;