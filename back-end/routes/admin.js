// routes/admin.js

const express = require('express');
const router = express.Router();

// بيانات تسجيل دخول افتراضية (يمكنك ربطها بقاعدة بيانات لاحقًا)
const ADMIN_CREDENTIALS = {
  login: 'admin',
  password: 'ocpp',
};

router.post('/login', (req, res) => {
  const { login, password } = req.body;

  if (login === ADMIN_CREDENTIALS.login && password === ADMIN_CREDENTIALS.password) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid login or password' });
  }
});

module.exports = router;
