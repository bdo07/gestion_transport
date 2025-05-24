import React from 'react';
import '../styles/LabPage.css'; // تأكد من تغيير اسم الملف CSS
import labImage from '../assets/lab.jpg'; // صورة للمعمل
import innovationImage from '../assets/innovation.jpg'; // صورة للابتكار
import sustainabilityImage from '../assets/sustainability.jpg'; // صورة للاستدامة

const LabPage = () => {
    return (
        <div className="lab-page-container">
            <h1 className="lab-page-title">Laboratoire du Phosphate</h1>
            <p className="lab-page-intro">
                Le laboratoire du phosphate est un centre de recherche et développement où nous développons de nouvelles technologies pour améliorer l'extraction et le traitement du phosphate.
            </p>

            <div className="lab-features">
                <div className="feature-item">
                    <img src={labImage} alt="Centre de recherche et développement" className="feature-image" />
                    <div className="feature-content">
                        <h2 className="feature-title">Centre de recherche et développement</h2>
                        <p className="feature-description">
                            Nous développons des technologies avancées pour améliorer les processus d'extraction et de traitement du phosphate, garantissant une efficacité et une qualité supérieures.
                        </p>
                    </div>
                </div>

                <div className="feature-item">
                    <img src={innovationImage} alt="Innovation" className="feature-image" />
                    <div className="feature-content">
                        <h2 className="feature-title">Innovation</h2>
                        <p className="feature-description">
                            Nous innovons des solutions nouvelles et créatives pour répondre aux besoins de l'industrie, en mettant l'accent sur les technologies modernes et la durabilité.
                        </p>
                    </div>
                </div>

                <div className="feature-item">
                    <img src={sustainabilityImage} alt="Durabilité" className="feature-image" />
                    <div className="feature-content">
                        <h2 className="feature-title">Durabilité</h2>
                        <p className="feature-description">
                            Nous nous engageons à développer des solutions durables qui préservent l'environnement et répondent aux besoins des générations futures.
                        </p>
                    </div>
                </div>
            </div>

            <div className="lab-mission">
                <h2>Notre Mission</h2>
                <p>
                    Notre mission est de transformer le phosphate en produits de haute qualité qui renforcent le développement agricole et industriel, tout en préservant l'environnement.
                </p>
            </div>
        </div>
    );
};

export default LabPage;