import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCKsMqoBNQpQ-HzdaQaa4JvLps4bQnOYuo",
    authDomain: "orders-realtime-dev.firebaseapp.com",
    databaseURL: "https://orders-realtime-dev.firebaseio.com",
    projectId: "orders-realtime-dev",
    storageBucket: "orders-realtime-dev.appspot.com",
    messagingSenderId: "619118518384"
};


let Fbservice = firebase.initializeApp(config);

export default Fbservice;
