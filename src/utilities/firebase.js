import firebase from "firebase";
import 'firebase/firebase'
console.table(process.env)
const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();
 const storage = firebase.storage()



const storageUploader = (data ={},progressCallBack,complete) =>{
     /* data object {
     filePath: 'music/filename',
     file:{
     }
    }
     */
    const filePath = storage.ref().child(data.filePath).put(data.mp3);

    filePath.on('state_changed',(snapshot)=>{
        let progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
         progressCallBack(progress)

    }, (error) => error, ()=> {
        filePath.snapshot.ref.getDownloadURL().then(url=>{
            console.log(url);
            complete(url)

        });

    })

};




// db.collection('music').add({
//     image: 'https://resources.tidal.com/images/632ecaef/a635/4bda/9bbf/d3ee320a7c17/320x320.jpg',
//     title: 'New Song',
//     artist:'New Artist',
//     album:'New Album',
//     time: '4:00',
//      section: 'New Music',
//     mp3:'https://firebasestorage.googleapis.com/v0/b/imperialize-d6d86.appspot.com/o/all_songs%2FTRAP%20CHICK%20VOCALS%20-%20Demo.mp3?alt=media&token=04afe5b1-ab0c-4638-9e99-1803823543e9'
// });

export {db, storage,storageUploader}