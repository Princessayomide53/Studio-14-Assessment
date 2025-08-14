import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const theme = extendTheme({
  breakpoints: {
    sm: '48em', // 768px
    md: '64em', // 1024px
    lg: '80em', // 1280px
    xl: '90em', // 1440px
  },
  textStyles: {
    poppins: {
      fontFamily: `'Poppins', sans-serif`,
    },
    inter: {
      fontFamily: `'Inter', sans-serif`,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
