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
      authProvider: 'local',
      userType: 'normal',
    };
    await admin.firestore().collection('users').doc(uid).set(newUser);
    return res
      .status(201)
      .json({ message: 'User document created successfully' });
  } catch (error) {
    console.error('Error creating user document', error);
    return res.status(500).json({ error });
  }
});

app.get('/getUserDetails', async (req, res) => {
  try {
    const userId = req.query.userId;
    const userRef = admin.firestore().collection('users').doc(userId);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return res.status(404).send('User not found');
    }

    const userDetails = userDoc.data();
    return res.status(200).json(userDetails);
  } catch (error) {
    console.error('Error retrieving user details:', error);
    return res.status(500).send('Internal Server Error');
  }
});

exports.api = functions.https.onRequest(app);
