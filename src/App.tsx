import { Route, Routes, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

const { Header, Content } = Layout

// Componentes de ejemplo
const Home = () => <h2>Página de Inicio</h2>
const About = () => <h2>Acerca de</h2>
const Contact = () => <h2>Contacto</h2>

function App() {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><Link to="/">Inicio</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/about">Acerca de</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/contact">Contacto</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Content>
    </Layout>
  )
}

export default App