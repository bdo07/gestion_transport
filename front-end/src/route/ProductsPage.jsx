import React from 'react';
import '../styles/ProductsPage.css'; // تأكد من تغيير اسم الملف CSS
import fertilizerImage from '../assets/fertilizer.jpg'; // صورة للأسمدة
import phosphoricAcidImage from '../assets/phosphoric-acid.jpg'; // صورة لحمض الفوسفوريك
import chemicalsImage from '../assets/chemicals.jpg'; // صورة للمنتجات الكيميائية

const ProductsPage = () => {
    return (
        <div className="products-page-container">
            <h1 className="products-page-title">Produits du Phosphate</h1>
            <p className="products-page-intro">
                Nous offrons une large gamme de produits dérivés du phosphate, répondant aux besoins des industries agricoles et chimiques. Voici quelques-uns de nos produits principaux :
            </p>

            <div className="products-list">
                <div className="product-item">
                    <img src={fertilizerImage} alt="Engrais phosphatés" className="product-image" />
                    <div className="product-content">
                        <h2 className="product-title">Engrais phosphatés</h2>
                        <p className="product-description">
                            Les engrais phosphatés sont des produits de haute qualité utilisés pour stimuler la croissance des plantes et augmenter la productivité agricole. Ils contiennent une teneur élevée en phosphore, un nutriment essentiel pour les plantes.
                        </p>
                        <button className="learn-more-button">En savoir plus</button>
                    </div>
                </div>

                <div className="product-item">
                    <img src={phosphoricAcidImage} alt="Acides phosphoriques" className="product-image" />
                    <div className="product-content">
                        <h2 className="product-title">Acides phosphoriques</h2>
                        <p className="product-description">
                            Les acides phosphoriques sont des produits chimiques utilisés dans les industries des engrais, des aliments et des médicaments. Ils se distinguent par leur haute qualité et leur efficacité dans les applications industrielles.
                        </p>
                        <button className="learn-more-button">En savoir plus</button>
                    </div>
                </div>

                <div className="product-item">
                    <img src={chemicalsImage} alt="Produits chimiques spécialisés" className="product-image" />
                    <div className="product-content">
                        <h2 className="product-title">Produits chimiques spécialisés</h2>
                        <p className="product-description">
                            Nous proposons une variété de produits chimiques spécialisés utilisés dans les industries chimiques et de nettoyage. Ces produits se distinguent par leur efficacité et leur haute qualité.
                        </p>
                        <button className="learn-more-button">En savoir plus</button>
                    </div>
                </div>
            </div>

            <div className="contact-section">
                <h2>Pour plus d'informations</h2>
                <p>
                    Si vous êtes intéressé par nos produits ou avez besoin de conseils, veuillez nous contacter via :
                </p>
                <ul>
                    <li>E-mail : ocpgroup@ocp.com</li>
                    <li>Téléphone : +212 556 7890</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductsPage;