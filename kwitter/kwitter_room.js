
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDfkM4HSMGl-3yA5NzoJS_zCuvdoSJNS1A",
      authDomain: "kwitter-fcd16.firebaseapp.com",
      databaseURL: "https://kwitter-fcd16-default-rtdb.firebaseio.com",
      projectId: "kwitter-fcd16",
      storageBucket: "kwitter-fcd16.appspot.com",
      messagingSenderId: "143740313506",
      appId: "1:143740313506:web:f6a96db6a0d44e2dee5cfb"
    };
    
firebase.initializeApp(config);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();


function logout() {
      window.location = "index.html";
}