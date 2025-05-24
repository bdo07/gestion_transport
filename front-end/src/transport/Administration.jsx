import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Administration.css';



const Administration = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const isAuthenticated = localStorage.getItem('isAuthenticated');
                if (!isAuthenticated) {
                    navigate('/transport/admin-login'); 
                    return;
                }

                const response = await fetch('http://localhost:5000/api/administration');
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setError('Error fetching users: ' + error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, [navigate]);

    const handleDelete = async (userId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this user?');
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('User deleted successfully!');
                // إعادة جلب البيانات بعد الحذف
                const updatedUsers = users.filter(user => user._id !== userId);
                setUsers(updatedUsers);
            } else {
                throw new Error('Failed to delete user');
            }
        } catch (error) {
            alert('Error deleting user: ' + error.message);
        }
    };

    const handleEdit = (userId) => {
        navigate(`/transport/edit/${userId}`); // توجيه إلى صفحة التعديل
    };

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated'); // حذف حالة المصادقة
        navigate('/transport/admin-login'); // توجيه إلى صفحة تسجيل الدخول
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="administration-page">
            <div className="header">
                <h2>Administration</h2>
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>CIN</th> {/* تمت إضافة عمود CIN */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.address}</td>
                                <td>{user.city}</td>
                                <td>{user.cin}</td> {/* تمت إضافة قيمة CIN */}
                                <td>
                                    <button onClick={() => handleEdit(user._id)} className="edit-button">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(user._id)} className="delete-button">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="no-users">No users found</td> {/* تم تعديل colSpan ليشمل CIN */}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Administration;