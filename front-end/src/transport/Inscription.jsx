import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import './Inscription.css';

const Inscription = ({ setIsRegistered }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        cin: '',
        phone: '',
        city: '',
    });
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        try {
            const response = await fetch('http://localhost:5000/api/inscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success('User registered successfully!');
                setIsRegistered(true);
                setTimeout(() => {
                    navigate('/form');
                }, 1500); // تأخير لإعطاء وقت لعرض الرسالة
            } else {
                toast.error(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Error registering user:', error);
            toast.error('Error registering user');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="inscription-page">
            <Toaster position="top-center" reverseOrder={false} />
            <h2>Inscription</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="firstName">Nom:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Prénom:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Adresse:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cin">CIN:</label>
                    <input
                        type="text"
                        id="cin"
                        name="cin"
                        value={formData.cin}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Téléphone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">Ville:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    S'inscrire
                </button>
            </form>
        </div>
    );
};

export default Inscription;
