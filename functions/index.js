const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

admin.initializeApp();

const app = express();
app.use(cors({ origin: true }));

// User Routes

app.post('/createUser', async (req, res) => {
  try {
    const { uid, email } = req.body;
    const newUser = {
      email,
      userId: uid,
    };
    await admin.firestore().collection('users').doc(uid).set(newUser);
    return res
      .status(201)
      .json({ message: 'User document created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
});

exports.api = functions.https.onRequest(app);
