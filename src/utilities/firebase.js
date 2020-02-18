import firebase from "firebase";
import 'firebase/firebase'
import fb from './firebaseConfig'

const firebaseConfig = {
    apiKey: fb.apiKey,
    authDomain: fb.authDomain,
    databaseURL: fb.databaseURL,
    projectId: fb.projectId,
    storageBucket: fb.storageBucket,
    messagingSenderId: fb.messagingSenderId,
    appId: fb.appId,
    measurementId: fb.measurementId
};

firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();
 const storage = firebase.storage()


// db.collection('music').add({
//     image: 'https://resources.tidal.com/images/632ecaef/a635/4bda/9bbf/d3ee320a7c17/320x320.jpg',
//     title: 'New Song',
//     artist:'New Artist',
//     album:'New Album',
//     time: '4:00',
//      section: 'New Music',
//     mp3:'https://firebasestorage.googleapis.com/v0/b/imperialize-d6d86.appspot.com/o/all_songs%2FTRAP%20CHICK%20VOCALS%20-%20Demo.mp3?alt=media&token=04afe5b1-ab0c-4638-9e99-1803823543e9'
// });

export {db, storage}