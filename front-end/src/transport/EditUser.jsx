import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditUser.css';

const EditUser = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        cin: '', // تمت إضافة حقل CIN
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/users/${userId}`);
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchUser();
    }, [userId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('User updated successfully!');
                navigate('/transport/administration');
            } else {
                alert('Failed to update user');
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className="edit-user-page">
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
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
                    <label htmlFor="lastName">Last Name:</label>
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
                    <label htmlFor="phone">Phone:</label>
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
                    <label htmlFor="address">Address:</label>
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
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cin">CIN:</label> {/* تمت إضافة حقل CIN */}
                    <input
                        type="text"
                        id="cin"
                        name="cin"
                        value={formData.cin}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    Update User
                </button>
            </form>
        </div>
    );
};

export default EditUser;