import { collection, addDoc } from 'firebase/firestore';

import { db } from './firebase';

export const sendEnrollmentEmail = async (email) => {
  try {
    await addDoc(collection(db, 'emails'), {
      to: [
        // 'jansen.smith@horizonmech.co',
        'calebhaabbott94@gmail.com',
      ],
      // cc: 'calebhaabbott94@gmail.com',
      message: {
        subject: `A new account has been registered: ${email}`,
        html: `Email address: ${email}`,
      },
    });

    console.log(email);
    console.log('Email triggered successfully!');
  } catch (error) {
    console.error('Error triggering email:', error);
  }
};
