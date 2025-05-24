import React from 'react';
import { useTranslation } from 'react-i18next';  
import '../styles/Footer.css';

const Footer = () => {
  const { t } = useTranslation();  

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{t('about')}</h3>
          <p>موقع معمل الفوسفاط يقدم معلومات عن الفوسفاط واستخداماته المذهلة في الصناعة والزراعة.</p>
        </div>
        <div className="footer-section">
          <h3>{t('quickLinks')}</h3>
          <ul>
            <li><a href="/">{t('home')}</a></li>
            <li><a href="/products">{t('products')}</a></li>
            <li><a href="/contact">{t('contact')}</a></li>
            <li><a href="/transport">{t('tronsport')}</a></li>

            
          </ul>
        </div>
        <div className="footer-section">
          <h3>{t('contact')}</h3>
          <p>{t('address')}</p>
          <p>{t('phone')}</p>
          <p>{t('email')}</p>
          <p>{t('tronsport')}</p>

          
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;