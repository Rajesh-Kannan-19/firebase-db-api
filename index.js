var firebase = require('firebase/compat/app');

  

require('firebase/compat/database')

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;

app.get('/', async (req, res) => {
    var table = req.query.table
    var databaseURL = req.query.databaseURL
    var projectId = req.query.projectId
    const firebaseConfig = {
        databaseURL: databaseURL || "https://test-database-60e38-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: projectId || "test-database-60e38",
      };
      firebase.initializeApp(firebaseConfig)
      let data;
    await firebase.database().ref(table || "user").on("value", snapshot =>{
        data = snapshot.val();
    })
     res.json(data)
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });