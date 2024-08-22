import { Route, Routes } from 'react-router-dom';
import { Layout, ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import { lightTheme } from './shared/assets/js/theme';
import AppHeader from './assets/header';
import AppFooter from './assets/footer';
import './App.css';

const { Content } = Layout;

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
  return (
    <ConfigProvider theme={lightTheme}>
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader />
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280, marginTop: 16 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </ConfigProvider>
  )
}

export default App;