import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

export default ({ $config }: any) => {
  const firebaseConfig = {
    apiKey: $config.FIREBASE_API_KEY,
    authDomain: $config.FIREBASE_AUTH_DOMAIN,
    projectId: $config.FIREBASE_PROJECT_ID,
    storageBucket: $config.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: $config.FIREBASE_MESSAGING_SENDER_ID,
    appId: $config.FIREBASE_APP_ID,
    measurementId: $config.FIREBASE_MEASUREMENT_ID,
  };

  const app: FirebaseApp = initializeApp(firebaseConfig);
  getAnalytics(app);
};
