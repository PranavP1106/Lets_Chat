var firebaseConfig = {
      apiKey: "AIzaSyDWImjci2_Zq1KV9VvH7m6ZYgc7QhN47Y4",
      authDomain: "letschat-17ebe.firebaseapp.com",
      databaseURL: "https://letschat-17ebe-default-rtdb.firebaseio.com",
      projectId: "letschat-17ebe",
      storageBucket: "letschat-17ebe.appspot.com",
      messagingSenderId: "116691931021",
      appId: "1:116691931021:web:99b8384225290bbc3e77c4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("User_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addroom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="Chat_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name - " +Room_names);
      row="<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
  getData();
  function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="Chat_page.html";
}

function logout(){
      localStorage.removeItem("User_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

