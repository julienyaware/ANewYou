import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppRegistry } from 'react-native';
import App from '../App';
import { name as appName } from '../app.json'

// Firebase config
const firebaseConfig = {
  apiKey: "xxxxxx",
  authDomain: "xxxxxx",
  projectId: "xxxxxx",
  storageBucket: "xxxxxx",
  messagingSenderId: "xxxxxx",
  appId: "xxxxxx",
  measurementId: "xxxxxx"
};
 
// initialize firebase
export const app = initializeApp(firebaseConfig);
// AppRegistry.registerComponent(appName, () => App);


// const analytics = getAnalytics(app);


const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const storage = getStorage(app)

export { db,auth,storage }