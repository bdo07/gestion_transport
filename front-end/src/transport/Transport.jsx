import React from 'react';
import { Link } from 'react-router-dom';
import './Transport.css';

const Transport = () => {
    return (
        <div className="transport-page">
            <h1>Gestion de Transport</h1>
            <div className="transport-links">
                <Link to="/transport/form" className="transport-link">
                    Formulaire
                </Link>
                <Link to="/transport/inscription" className="transport-link">
                    Inscription
                </Link>
                <Link to="/transport/admin-login" className="transport-link"> 
                    Administration
                </Link>
            </div>
        </div>
    );
};

export default Transport;