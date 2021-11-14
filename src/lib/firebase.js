import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

    // polecenia konfiguracyjne bazy danych pozyskane z cloud firestore w platformie Firebase
const config = {
    apiKey: 'AIzaSyA5xF_StmM1lHhIiSMkyMwLIkH-_bVAZnA',
    authDomain: 'mysocialmediaapp-9e46a.firebaseapp.com',
    projectId: 'mysocialmediaapp-9e46a',
    storageBucket: 'mysocialmediaapp-9e46a.appspot.com',
    messagingSenderId: '573679843080',
    appId: '1:573679843080:web:4d5042af798e9801f5debd'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export {firebase, FieldValue};