var firebase = require('firebase/compat/app');
require('firebase/compat/database')
const firebaseConfig = {
    // apiKey: "AIzaSyCK9BP8CrsdBd3cX65gnaV1dzTXpr4YdMU",
    // authDomain: "test-database-60e38.firebaseapp.com",
    databaseURL: "https://test-database-60e38-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-database-60e38",
    // storageBucket: "test-database-60e38.appspot.com",
    // messagingSenderId: "762127810386",
    // appId: "1:762127810386:web:78c4a71d1bdbf960d0448b",
    // measurementId: "G-2T9VV5N1LX"
  };
  firebase.initializeApp(firebaseConfig)
  let data;
firebase.database().ref("user").on("value", snapshot =>{
  data = snapshot.val();
})
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;

app.get('/',(req, res) => {
    res.json(data)
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });