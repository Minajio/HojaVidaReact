import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componentes/header/Header.jsx';
import Main from './componentes/main/Main.jsx';
import Footer from "./componentes/footer/Footer.jsx";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
)
