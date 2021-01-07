import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCV7w9RgNowX_md-Hq1Jw5H2Mn10QH-4t0",
    authDomain: "danielkim-portfolio.firebaseapp.com",
    projectId: "danielkim-portfolio",
    storageBucket: "danielkim-portfolio.appspot.com",
    messagingSenderId: "925623460225",
    appId: "1:925623460225:web:014297d25ab7152c350880",
    measurementId: "G-H1K4VY67QX"
};
  
// connecting the front and backend
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;