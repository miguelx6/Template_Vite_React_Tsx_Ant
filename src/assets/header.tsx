import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Select } from 'antd';
import { useTranslation } from 'react-i18next';

const { Header } = Layout;
const { Option } = Select;

const AppHeader: React.FC = () => {
const { t, i18n } = useTranslation();

const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
};

return (
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
    );
};

export default AppHeader;