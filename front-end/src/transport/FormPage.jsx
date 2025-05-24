import React, { useState } from 'react';
import './FormPage.css';

const FormPage = ({ isRegistered }) => {
    const [cin, setCin] = useState('');
    const [adresse, setAdresse] = useState('');
    const [busNumber, setBusNumber] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [availableAddresses, setAvailableAddresses] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('CIN:', cin); // تحقق من الـ CIN
        console.log('Adresse:', adresse); // تحقق من العنوان
        try {
            const response = await fetch('http://localhost:5000/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cin, adresse }),
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Bus Number:', data.busNumber); // تحقق من النتيجة
                setBusNumber(data.busNumber); // تحديث الحالة برقم الحافلة
                setErrorMessage(''); // إعادة تعيين رسالة الخطأ
            } else {
                console.error('Error:', data.message); // تحقق من رسالة الخطأ
                setBusNumber(null); // إعادة تعيين الحالة في حالة الخطأ
                setErrorMessage(data.message); // عرض رسالة الخطأ
                if (data.availableAddresses) {
                    setAvailableAddresses(data.availableAddresses); // عرض العناوين المتاحة
                }
            }
        } catch (error) {
            console.error('Error:', error);
            setBusNumber(null); // إعادة تعيين الحالة في حالة الخطأ
            setErrorMessage('Une erreur s\'est produite. Veuillez réessayer.'); // رسالة خطأ عامة
        }
    };

    return (
        <div className="form-page">
            <h2>Rechercher un bus</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="cin">CIN:</label>
                    <input
                        type="text"
                        id="cin"
                        placeholder="Entrez votre CIN"
                        value={cin}
                        onChange={(e) => setCin(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="adresse">Adresse:</label>
                    <input
                        type="text"
                        id="adresse"
                        placeholder="Entrez votre adresse"
                        value={adresse}
                        onChange={(e) => setAdresse(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Rechercher</button>
            </form>

            {busNumber && (
                <div className="bus-number">
                    <h3>Résultat:</h3>
                    <p>Numéro de bus: {busNumber}</p>
                </div>
            )}

            {errorMessage && (
                <div className="error-message">
                    <p>{errorMessage}</p>
                    {availableAddresses.length > 0 && (
                        <ul>
                            {availableAddresses.map((address, index) => (
                                <li key={index}>{address}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default FormPage;