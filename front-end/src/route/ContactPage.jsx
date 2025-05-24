import React from 'react';
import '../styles/ContactPage.css'; // تأكد من تغيير اسم الملف CSS أيضًا

const ContactPage = () => {
    return (
        <div className="contact-page-container">
            <h1 className="contact-page-title">Contactez-nous</h1>
            <p className="contact-page-description">
                Pour toute question ou commentaire, veuillez nous contacter via les informations suivantes :
            </p>
            <ul className="contact-page-list">
                <li className="contact-page-item">E-mail : ocpgroup@ocp.com</li>
                <li className="contact-page-item">Téléphone : +212 556 7890</li>
                <li className="contact-page-item">Adresse : Safi, Maroc</li>
            </ul>
        </div>
    );
};

export default ContactPage;