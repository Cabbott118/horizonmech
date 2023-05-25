import { collection, addDoc } from 'firebase/firestore';

import { db } from '../utils/firebase';

export const sendEmail = async (email) => {
  try {
    addDoc(collection(db, 'emails'), {
      to: ['jansen.smith@horizonmech.co'],
      cc: 'calebhaabbott94@gmail.com',
      message: {
        subject: `A new account has been registered: ${email}`,
        html: `Email address: ${email}<br> If you're seeing this, I got the email to trigger after account creation!`,
      },
    });

    // Update the document to trigger the email
    console.log(email);
    console.log('Email triggered successfully!');
  } catch (error) {
    console.error('Error triggering email:', error);
  }
};
