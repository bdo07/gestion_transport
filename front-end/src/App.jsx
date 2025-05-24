import React from 'react';
import { useTranslation } from 'react-i18next'; // تأكد من استيراد useTranslation
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './route/HomePage.jsx';
import UsesPage from "./route/UsesPage.jsx";
import ProductsPage from './route/ProductsPage.jsx';
import LabPage from './route/LabPage.jsx';
import ContactPage from './route/ContactPage.jsx';
import Transport from './transport/Transport.jsx';
import FormPage from './transport/FormPage.jsx'; 
import Inscription from './transport/Inscription.jsx'; 
import './i18n'; 
import './styles/App.css';
import './styles/Footer.css';
import Footer from './route/Footer.jsx';


import Administration from './transport/Administration.jsx'; 

import EditUser from './transport/EditUser.jsx';
import AdminLogin from './transport/AdminLogin.jsx';


const App = () => {
    const { t, i18n } = useTranslation(); 

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); 
    };

    return (
        <Router>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img src="/logos/OCP_Group.webp" alt="Company Logo" />
                    </Link>
                </div>

                <div className="nav-links">
                    <Link to="/">{t('home')}</Link>
                    <Link to="/uses">{t('uses')}</Link>
                    <Link to="/products">{t('products')}</Link>
                    <Link to="/lab">{t('lab')}</Link>
                    <Link to="/transport">{t('tronsport')}</Link>
                    <Link to="/contact">{t('contact')}</Link>
                </div>

                <div className="language-switcher">
                    <button onClick={() => changeLanguage('ar')}>ar</button>
                    <button onClick={() => changeLanguage('fr')}>fr</button>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/uses" element={<UsesPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/lab" element={<LabPage />} />
                <Route path="/transport" element={<Transport />} />
                <Route path="/transport/form" element={<FormPage />} /> 
                <Route path="/transport/inscription" element={<Inscription />} /> 
                <Route path="/transport/administration" element={<Administration />} /> 
                <Route path="/contact" element={<ContactPage />} />
                

                <Route path="/transport/edit/:userId" element={<EditUser />} />
                <Route path="/transport/admin-login" element={<AdminLogin />} />
            </Routes>

            <Footer />
        </Router>
    );
};

export default App;