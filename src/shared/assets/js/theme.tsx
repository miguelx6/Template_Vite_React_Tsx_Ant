// src/shared/assets/js/theme.js

import { theme } from 'antd';

const { defaultAlgorithm, darkAlgorithm } = theme;

const customTheme = {
    token: {
        colorPrimary: '#9D2449',
        colorSecondary: '#13322B',
        colorError: '#FF0000',
        colorWarning: '#FFC107',
        colorInfo: '#2196F3',
        colorSuccess: '#4CAF50',
        colorTextBase: '#000000',
        colorBgBase: '#ffffff',
        fontSize: 17,
        borderRadius: 4,
    },
    components: {
        Button: {
            controlHeight: 40,
            controlHeightLG: 48,
            controlHeightSM: 32,
            paddingContentHorizontal: 16,
        },
    Card: {
        boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
    },
    Table: {
        headerBg: '#13322B',
        headerColor: '#ffffff',
    },
    Tabs: {
        inkBarColor: '#13322B',
    },
    Select: {
        controlItemBgActive: '#f0f0f0',
    },
    },
};

const lightTheme = {
    algorithm: defaultAlgorithm,
    ...customTheme,
};

const darkTheme = {
    algorithm: darkAlgorithm,
    ...customTheme,
};

export { lightTheme, darkTheme };