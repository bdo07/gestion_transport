import React from 'react';
import '../styles/UsesPage.css'; // تأكد من تغيير اسم الملف CSS
import { FaLeaf, FaSeedling, FaFlask, FaSoap } from 'react-icons/fa'; // أيقونات Font Awesome
import fertilizerImage from '../assets/fertilizer.jpg'; // صورة للأسمدة
import soilImage from '../assets/soil.jpg'; // صورة للتربة
import chemicalsImage from '../assets/chemicals.jpg'; // صورة للصناعات الكيميائية
import cleaningImage from '../assets/cleaning.jpg'; // صورة للمنظفات

const UsesPage = () => {
    return (
        <div className="uses-page-container">
            <h1 className="uses-page-title">Utilisations du Phosphate</h1>
            <p className="uses-page-intro">
                Le phosphate est une ressource naturelle importante avec de nombreuses utilisations dans diverses industries. Voici quelques utilisations principales :
            </p>

            <div className="uses-list">
                <div className="use-item">
                    <img src={fertilizerImage} alt="Fabrication d'engrais agricoles" className="use-image" />
                    <div className="use-content">
                        <div className="use-icon">
                            <FaLeaf />
                        </div>
                        <h2 className="use-title">Fabrication d'engrais agricoles</h2>
                        <p className="use-description">
                            Le phosphate est utilisé dans la fabrication d'engrais pour stimuler la croissance des plantes et augmenter la productivité agricole. C'est une source principale de phosphore, un nutriment essentiel pour les plantes.
                        </p>
                        <button className="learn-more-button">En savoir plus</button>
                    </div>
                </div>

                <div className="use-item">
                    <img src={soilImage} alt="Amélioration de la qualité du sol" className="use-image" />
                    <div className="use-content">
                        <div className="use-icon">
                            <FaSeedling />
                        </div>
                        <h2 className="use-title">Amélioration de la qualité du sol</h2>
                        <p className="use-description">
                            Le phosphate aide à améliorer la fertilité du sol en fournissant les nutriments nécessaires à la croissance des plantes, ce qui augmente la productivité et la qualité des cultures.
                        </p>
                        <button className="learn-more-button">En savoir plus</button>
                    </div>
                </div>

                <div className="use-item">
                    <img src={chemicalsImage} alt="Industries chimiques" className="use-image" />
                    <div className="use-content">
                        <div className="use-icon">
                            <FaFlask />
                        </div>
                        <h2 className="use-title">Industries chimiques</h2>
                        <p className="use-description">
                            Le phosphate est utilisé dans la fabrication de nombreux produits chimiques, tels que l'acide phosphorique et les phosphates, qui sont utilisés dans les industries alimentaires et pharmaceutiques.
                        </p>
                        <button className="learn-more-button">En savoir plus</button>
                    </div>
                </div>

                <div className="use-item">
                    <img src={cleaningImage} alt="Production de produits de nettoyage" className="use-image" />
                    <div className="use-content">
                        <div className="use-icon">
                            <FaSoap />
                        </div>
                        <h2 className="use-title">Production de produits de nettoyage</h2>
                        <p className="use-description">
                            Le phosphate est utilisé dans la fabrication de détergents et de produits de nettoyage en raison de sa capacité à éliminer efficacement la saleté et les graisses.
                        </p>
                        <button className="learn-more-button">En savoir plus</button>
                    </div>
                </div>
            </div>

            <div className="comments-section">
                <h2>Partagez votre avis</h2>
                <textarea placeholder="Écrivez votre commentaire ici..." className="comment-input"></textarea>
                <button className="submit-button">Envoyer</button>
            </div>
        </div>
    );
};

export default UsesPage;