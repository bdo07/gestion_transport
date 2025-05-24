const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// استيراد مسارات الادمن
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// تفعيل مسار الادمن
app.use('/api/admin', adminRoutes);

// الاتصال بقاعدة البيانات MongoDB
mongoose.connect('mongodb://localhost:27017/transportDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// نموذج المستخدم (User Schema)
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    cin: { type: String, required: true, unique: true }, 
    phone: { type: String, required: true },
    city: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// نموذج الحفلات (Event Schema)
const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
});

const Event = mongoose.model('Event', eventSchema);

// باقي مسارات API مثل /api/form, /api/inscription, /api/administration ... إلخ

// مسار النموذج (Form)
app.post('/api/form', async (req, res) => {
    const { cin, adresse } = req.body;

    const user = await User.findOne({ cin });
    if (!user) {
        return res.status(404).json({ message: 'CIN non trouvé. Veuillez vous inscrire.' });
    }

    const addressBusMap = {
        "kores": "bus 1",
        "amouni": "bus 2",
        "alqliea": "bus 4",
        "alerissa": "bus 5",
        "almatar": "bus 3",
        "hay anas": "bus 6",
        "hay wrayda": "bus 7",
        "sania": "bus 8",
        "jrayfat": "bus 9",
        "kinidi": "bus 10",
        "charie aribat": "bus 11",
        "alkodes": "bus 12",
        "ezib darei": "bus 13",
        "qarya achames": "bus 14",
        "khawarizmi": "bus 15",
        "darb molay hassan": "bus 16",
        "sidi abdelkriim": "bus 17",
        "jnan colone": "bus 18",
        "hay salam": "bus 19",
        "biyada": "bus 20"
    };

    const normalizedAdresse = adresse.toLowerCase().trim();
    const busNumber = addressBusMap[normalizedAdresse] || null;

    if (!busNumber) {
        return res.status(404).json({ 
            message: 'Adresse non trouvée. Voici la liste des adresses disponibles:', 
            availableAddresses: Object.keys(addressBusMap) 
        });
    }

    res.status(200).json({ busNumber });
});

// مسار التسجيل (Inscription)
app.post('/api/inscription', async (req, res) => {
    try {
        const { firstName, lastName, email, address, cin, phone, city } = req.body;

        const existingUserByCIN = await User.findOne({ cin });
        if (existingUserByCIN) {
            return res.status(400).json({ message: 'CIN déjà utilisé.' });
        }

        const existingUserByEmail = await User.findOne({ email });
        if (existingUserByEmail) {
            return res.status(400).json({ message: 'Email déjà utilisé.' });
        }

        const newUser = new User({ firstName, lastName, email, address, cin, phone, city });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});

// مسار الإدارة - جلب المستخدمين
app.get('/api/administration', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
});

// حذف المستخدم
app.delete('/api/users/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
});

// تعديل المستخدم
app.put('/api/users/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
});

// جلب الحفلات
app.get('/api/events', async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events', error: error.message });
    }
});

// بدء الخادم
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
